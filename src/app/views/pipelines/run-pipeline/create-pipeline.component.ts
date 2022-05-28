import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileCreateData } from "../../../../components/files/files-create/file-create-data";
import { HttpClientService } from "../../../services/http-client-service";
import { FilesModel } from "../../../../models/files";
import { FilesCreateResultToastComponent } from "../../../../components/files/files-create-result-toast/files-create-result-toast.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FileCreateService } from "../../../services/file-create-service";
import { HttpErrorResponse, HttpEvent, HttpEventType } from "@angular/common/http";
import {FileSelectionComponent} from "../../../../components/pipelines/file-selection/file-selection.component";
import {DatasetService} from "../../../services/dataset-service";

@Component({
  selector: 'app-run-pipeline',
  templateUrl: './create-pipeline.component.html',
  styleUrls: ['./create-pipeline.component.scss']
})
export class CreatePipelineComponent implements OnInit {

  /**
   * This EventEmitter is used to signal main component to create the file.
   */
  @Output() onFileUpload = new EventEmitter<FileCreateData>();

  @Input() datasetService: HttpClientService<FilesModel> = new DatasetService();

  availableInputDatasets!: FilesModel[];

  public modalFileOpen = false;
  metadata: FilesModel = new FilesModel();
  script!: File;

  progress!: string;

  @ViewChild(FilesCreateResultToastComponent) resultToast!: FilesCreateResultToastComponent;
  @ViewChild(FileSelectionComponent) fileSelectionComponent!: FileSelectionComponent;

  inputDatasets: FilesModel[] = new Array();

  pipelineCreateForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', []),
  });

  constructor(protected fileCreateService: FileCreateService<FilesModel>) {

  }

  ngOnInit(): void {
    this.datasetService.getAll().then(datasets => {
      this.availableInputDatasets = datasets;
    })
  }

  toggleModalFile() {
    if (!this.modalFileOpen)
      this.initModal();

    this.modalFileOpen = !this.modalFileOpen;
  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }

  initModal() {
    this.progress = "0";
  }

  openFilePickingModal() {
    this.fileSelectionComponent.toggleModalFile();
  }

  inputDatasetsSelected(inputDatasets: FilesModel[]) {
    this.inputDatasets = inputDatasets;
  }

  scriptFileChanged(event: Event)
  {
    let files = (<HTMLInputElement> event.target).files;
    if (files != null)
      this.script = files[0];
  }

  submitFile() {
    this.fileCreateService.setEndpointName(this.datasetService.getEndpointName());
    const metadata = new FilesModel();
    metadata.name = this.pipelineCreateForm.get('name')?.value;
    metadata.description = this.pipelineCreateForm.get('description')?.value;
    this.fileCreateService.createFileWithProgressMonitoring(
      metadata,
      this.script,
      this.handleError
    ).subscribe((event: HttpEvent<any>) => {

      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
          var eventTotal = event.total ? event.total : 0;
          this.progress = Math.round(event.loaded / eventTotal * 100).toString();
          console.log(`Uploaded! ${this.progress}%`);
          break;
        case HttpEventType.Response:
          let datasetModel: FilesModel = event.body;
          this.resultToast.toggleToast("File created successfully",
            "The file was successfully added to the database.");
          console.log('File Uploaded Successfully!', event.body);
          this.toggleModalFile();
      }
    })
  }

  handleError(error: HttpErrorResponse) {
    let creationResultMsgTitle: string;
    let creationResultMsgDescription: string;
    if (error.error instanceof ErrorEvent) {
      creationResultMsgTitle = "File creation failed";
      creationResultMsgDescription = "Client-side error: " + error.error.message;
    } else {
      creationResultMsgTitle = "File creation failed";
      creationResultMsgDescription = "Server-side error: " + `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    this.resultToast.toggleToast(creationResultMsgTitle, creationResultMsgDescription);

    this.toggleModalFile();
  }
}

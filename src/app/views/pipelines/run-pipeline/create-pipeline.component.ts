import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FileCreateData } from "../../../../components/files/files-create/file-create-data";
import { HttpClientService } from "../../../services/http-client-service";
import { FilesModel } from "../../../../models/files";
import { FilesCreateResultToastComponent } from "../../../../components/files/files-create-result-toast/files-create-result-toast.component";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FileCreateService } from "../../../services/file-create-service";
import { HttpErrorResponse, HttpEvent, HttpEventType } from "@angular/common/http";
import { FileSelectionComponent } from "../../../../components/pipelines/file-selection/file-selection.component";
import { DatasetService } from "../../../services/dataset-service";
import {CreatedPipeline} from "../../../../models/pipeline";
import {CreatedPipelineService} from "../../../services/pipeline-service";

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

  datasetService: HttpClientService<FilesModel> = new DatasetService();
  pipelineService: HttpClientService<CreatedPipeline> = new CreatedPipelineService();


  availableInputDatasets!: FilesModel[];

  public modalFileOpen = false;
  metadata: FilesModel = new FilesModel();
  script!: File;

  progress!: string;

  @ViewChild(FilesCreateResultToastComponent) resultToast!: FilesCreateResultToastComponent;
  @ViewChild(FileSelectionComponent) fileSelectionComponent!: FileSelectionComponent;

  @ViewChild(FilesCreateResultToastComponent) filesCreateResultToastComponent!: FilesCreateResultToastComponent;

  inputDatasets: FilesModel[] = new Array();

  pipelineCreateForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    script: new FormControl('', []),
  });

  constructor() {

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

  submit() {
    const pipeline = new CreatedPipeline();
    pipeline.name = this.pipelineCreateForm.get('name')?.value;
    pipeline.description = this.pipelineCreateForm.get('description')?.value;
    let inputDatasetsUuids: string[] = new Array();
    for (let file of this.inputDatasets)
    {
      inputDatasetsUuids.push(file.uuid);
    }
    pipeline.inputDatasetsUuids = inputDatasetsUuids;
    this.pipelineService.create(pipeline).then(serverReturn => {
        let datasetModel: FilesModel = serverReturn;
        this.showResultMessageToast(true, serverReturn);
        this.toggleModalFile();
      },
      serverReturn => {
        this.showResultMessageToast(false, serverReturn);
      });

  }

  showResultMessageToast(success: boolean, serverReturn: any)
  {
    let msgTitle: string;
    let msgDescription: string;
    if (success)
    {
      msgTitle = "Pipeline created successfully";
      msgDescription = "The pipeline was sucessfully created on server";
    }
    else
    {
      msgTitle = "Pipeline creation failed";
      msgDescription = "The pipeline creation has failed. Server returned: " + serverReturn;
    }
  }
}

import { Component, OnInit, EventEmitter, Output, Input, ViewChildren, QueryList, ViewChild } from '@angular/core';
import { FilesModel } from "../../../models/files";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FileCreateData } from "./file-create-data";
import { HttpClientService } from "../../../app/services/http-client-service";
import { FilesCreateResultToastComponent } from "../files-create-result-toast/files-create-result-toast.component";
import { FileCreateService } from "../../../app/services/file-create-service";
import {HttpErrorResponse, HttpEvent, HttpEventType} from "@angular/common/http";
import {throwError} from "rxjs";

@Component({
  selector: 'files-create',
  templateUrl: './files-create.component.html',
  styleUrls: ['./files-create.component.scss']
})
export class FilesCreateComponent implements OnInit {
  /**
   * This EventEmitter is used to signal main component to create the file.
   */
  @Output() onFileUpload = new EventEmitter<FilesModel>();

  @Input() fileService!: HttpClientService<FilesModel>;


  public modalFileOpen = false;
  metadata: FilesModel = new FilesModel();
  file!: File;

  progress!: string;

    @ViewChild(FilesCreateResultToastComponent) resultToast!: FilesCreateResultToastComponent;


  fileCreateForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', []),
  });

  constructor(protected fileCreateService: FileCreateService<FilesModel>) {

  }

  ngOnInit(): void {
  }

  toggleModalFile() {
    if (!this.modalFileOpen)
      this.initModal();

    this.modalFileOpen = !this.modalFileOpen;
  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  initModal() {
    this.progress = "0";
  }

  submitFile() {
    this.fileCreateService.setEndpointName(this.fileService.getEndpointName());
    const metadata = new FilesModel();
    metadata.name = this.fileCreateForm.get('name')?.value!;
    metadata.description = this.fileCreateForm.get('description')?.value!;
    this.fileCreateService.createFileWithProgressMonitoring(
      metadata,
      this.file,
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
          this.onFileUpload.emit(datasetModel);
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

import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { FilesModel } from "../../../models/files";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FileCreateData } from "./file-create-data";
import { HttpClientService } from "../../../app/services/http-client-service";

@Component({
  selector: 'files-create',
  templateUrl: './files-create.component.html',
  styleUrls: ['./files-create.component.scss']
})
export class FilesCreateComponent implements OnInit {
  /**
   * This EventEmitter is used to signal main component to create the file.
   */
  @Output() onFileUpload = new EventEmitter<FileCreateData>();

  @Input() fileService!: HttpClientService<FilesModel>;

  public modalFileOpen = false;
  metadata: FilesModel = new FilesModel();
  file!: File;

  creationResult!: boolean;
  creationResultMsgTitle!: String;
  creationResultMsgDescription!: String;


  fileCreateForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', []),
  });

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleModalFile() {
    this.modalFileOpen = !this.modalFileOpen;
  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  submit() {
    const metadata = new FilesModel();
    metadata.name = this.fileCreateForm.get('name')?.value;
    metadata.description = this.fileCreateForm.get('description')?.value;
    this.fileService.createFile(metadata, this.file).then(serverReturn => {
        let datasetModel: FilesModel = serverReturn;
        this.showResultMessageToast(true, serverReturn);
      },
      serverReturn => {
        this.showResultMessageToast(false, serverReturn);
      });
  }
}

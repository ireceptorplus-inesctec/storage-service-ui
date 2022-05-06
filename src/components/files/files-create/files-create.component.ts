import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilesModel } from "../../../models/files";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { FileCreateData } from "./file-create-data";

@Component({
  selector: 'files-create',
  templateUrl: './files-create.component.html',
  styleUrls: ['./files-create.component.scss']
})
export class FilesCreateComponent implements OnInit {
  @Output() onFileUpload = new EventEmitter<FileCreateData>();
  public modalFileOpen = false;
  metadata: FilesModel = new FilesModel();
  file!: File;

  fileCreateForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', []),
  });

  constructor() { }

  ngOnInit(): void {
  }

  toggleModalFile() {
    this.modalFileOpen = !this.modalFileOpen;
  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }

  onFileChange(event: any)
  {
    this.file = event.target.files[0];
  }

  submit() {
    let fileCreateData = new FileCreateData();
    fileCreateData.name = this.fileCreateForm.get('name')?.value;
    fileCreateData.description = this.fileCreateForm.get('description')?.value;
    fileCreateData.file = this.file;
    this.onFileUpload.emit(fileCreateData);
  }
}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilesModel } from "../../../models/files";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'files-create',
  templateUrl: './files-create.component.html',
  styleUrls: ['./files-create.component.scss']
})
export class FilesCreateComponent implements OnInit {
  @Output() onFileUpload = new EventEmitter<boolean>();
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

  submit() {
    let name = this.fileCreateForm.get('name')?.value;
    console.log(name);
    this.onFileUpload.emit(true);
  }
}

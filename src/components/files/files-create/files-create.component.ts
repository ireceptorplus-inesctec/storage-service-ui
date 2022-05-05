import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FilesModel} from "../../../models/files";

@Component({
  selector: 'files-create',
  templateUrl: './files-create.component.html',
  styleUrls: ['./files-create.component.scss']
})
export class FilesCreateComponent implements OnInit {
  @Output() onFileUpload = new EventEmitter<boolean>()
  public modalFileOpen = false;
  metadata: FilesModel = new FilesModel();
  file!: File;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModalFile() {
    this.modalFileOpen = !this.modalFileOpen;
  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }

  uploadFile() {

    this.onFileUpload.emit(true);
  }
}

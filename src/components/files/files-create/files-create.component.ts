import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'files-create',
  templateUrl: './files-create.component.html',
  styleUrls: ['./files-create.component.scss']
})
export class FilesCreateComponent implements OnInit {
  @Output() onFileUpload = new EventEmitter<boolean>()
  public modalFileOpen = false;

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

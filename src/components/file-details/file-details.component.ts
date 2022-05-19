import { Component, Input, OnInit } from '@angular/core';
import { FilesModel } from "../../models/files";

@Component({
  selector: 'app-file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent implements OnInit {
  @Input() file!: FilesModel;

  public modalFileOpen = false;

  constructor() { }

  toggleModalFile() {
    this.modalFileOpen = !this.modalFileOpen;
  }

  ngOnInit() {

  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }

}

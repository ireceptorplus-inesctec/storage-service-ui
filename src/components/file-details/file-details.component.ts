import { Component, Input, OnInit } from '@angular/core';
import { FilesModel } from "../../models/files";
import { environment } from "../../environments/environment";

@Component({
  selector: 'file-details',
  templateUrl: './file-details.component.html',
  styleUrls: ['./file-details.component.scss']
})
export class FileDetailsComponent implements OnInit {
  @Input() file!: FilesModel;

  public modalFileOpen = false;
  baseApiUrl: string = environment.apiUrl;

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

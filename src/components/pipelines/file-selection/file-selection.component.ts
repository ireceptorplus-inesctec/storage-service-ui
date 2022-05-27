import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { FilesModel } from "../../../models/files";
import {HttpClientService} from "../../../app/services/http-client-service";

@Component({
  selector: 'file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.scss']
})
export class FileSelectionComponent implements OnInit {

  @Input() availableFiles!: FilesModel[];

  @Output() selectedFilesEvent = new EventEmitter<FilesModel[]>();
  actionName: string = "a";
  public modalFileOpen = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.actionName);
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

  }

  submitSelection() {

  }

}

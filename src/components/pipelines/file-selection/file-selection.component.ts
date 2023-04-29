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
  @Input() filesAreLoaded: boolean = false;

  @Output() selectedFilesOutput = new EventEmitter<FilesModel[]>();
  actionNameForInputDatasetSelectionTable: string = "Select";
  selectableForInputDatasetSelectionTable: boolean = true;
  public modalFileOpen = false;

  constructor() { }

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

  initModal() {

  }

  handleSelectedFilesChanged(selectedFiles: FilesModel[]) {
    console.log(selectedFiles);
    this.selectedFilesOutput.emit(selectedFiles);
  }

  submitSelection() {
    this.toggleModalFile();
  }

}

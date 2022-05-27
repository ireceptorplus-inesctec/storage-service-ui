import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.scss']
})
export class FileSelectionComponent implements OnInit {

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

import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-files-create-result-toast',
  templateUrl: './files-create-result-toast.component.html',
  styleUrls: ['./files-create-result-toast.component.scss']
})
export class FilesCreateResultToastComponent implements OnInit {

  creationResultMsgTitle!: String;
  creationResultMsgDescription!: String;

  position = 'top-end';
  visible = false;
  percentage = 0;


  constructor() { }

  ngOnInit(): void {
  }

  public toggleToast(creationResultMsgTitle: string, creationResultMsgDescription: string)
  {
    this.visible = !this.visible;
    this.creationResultMsgTitle = creationResultMsgTitle;
    this.creationResultMsgDescription = creationResultMsgDescription;
  }

  onVisibleChange($event: boolean) {
    this.visible = $event;
    this.percentage = !this.visible ? 0 : this.percentage;
  }

  onTimerChange($event: number) {
    this.percentage = $event * 25;
  }

}

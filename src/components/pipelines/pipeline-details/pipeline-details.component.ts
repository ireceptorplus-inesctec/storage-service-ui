import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FilesModel } from "../../../models/files";
import { environment } from "../../../environments/environment";
import { HttpClientService } from "../../../app/services/http-client-service";
import { FinishedPipeline } from "../../../models/pipeline";
import {FilesTableComponent} from "../../files/files-table/files-table.component";

@Component({
  selector: 'pipeline-details',
  templateUrl: './pipeline-details.component.html',
  styleUrls: ['./pipeline-details.component.scss']
})
export class PipelineDetailsComponent {

  numberOfLinesToPreview: number = 5;

  @Input() pipeline: FinishedPipeline = new FinishedPipeline();

  public modalFileOpen = false;
  baseApiUrl: string = environment.apiUrl;
  filePreview!: string;

  @ViewChild(FilesTableComponent) filesTableComponent!: FilesTableComponent;


  constructor() {
  }

  toggleModalFile() {
    this.modalFileOpen = !this.modalFileOpen;
  }

  public initModal(pipeline: FinishedPipeline) {
    this.pipeline = pipeline;
  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }


}

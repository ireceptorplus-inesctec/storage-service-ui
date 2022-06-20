import { Component, OnInit } from '@angular/core';
import {FinishedPipeline} from "../../../../models/pipeline";
import {DatasetService} from "../../../services/dataset-service";
import {FinishedPipelineService} from "../../../services/finished-pipeline-service";

@Component({
  selector: 'finished-pipeline',
  templateUrl: './finished-pipelines.component.html',
  styleUrls: ['./finished-pipelines.component.scss']
})
export class FinishedPipelinesComponent implements OnInit {


  finishedPipelineService = new FinishedPipelineService();

  columnsToDisplayOnTable = [
    "UUID",
    "Name",
    "Description",
    "Date",
    "Tool",
    "Command"
  ];

  finishedPipelines: FinishedPipeline[] = [];

  contentName = "Pipelines";

  constructor() { }

  ngOnInit(): void {
    this.finishedPipelineService.getAll().then(finishedPipelines => {
      this.finishedPipelines = finishedPipelines;
    })
  }

}

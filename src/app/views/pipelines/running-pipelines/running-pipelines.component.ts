import { Component, OnInit } from '@angular/core';
import {FinishedPipelineService} from "../../../services/finished-pipeline-service";
import { Pipeline } from "../../../../models/pipeline";
import { RunningPipelineService } from "../../../services/running-pipelines-service";

@Component({
  selector: 'running-pipelines',
  templateUrl: './running-pipelines.component.html',
  styleUrls: ['./running-pipelines.component.scss']
})
export class RunningPipelinesComponent implements OnInit {

  finishedPipelineService = new RunningPipelineService();

  columnsToDisplayOnTable = [
    "UUID",
    "Name",
    "Description",
    "Date",
    "Tool",
    "Command"
  ];

  runningPipelines: Pipeline[] = [];

  contentName = "Pipelines";

  constructor() { }

  ngOnInit(): void {
    this.finishedPipelineService.getAll().then(runningPipelines => {
      this.runningPipelines = runningPipelines;
    })
  }

}

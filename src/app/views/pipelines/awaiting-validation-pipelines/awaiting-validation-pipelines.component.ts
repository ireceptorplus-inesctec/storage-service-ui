import { Component, OnInit } from '@angular/core';
import {FinishedPipelineService} from "../../../services/finished-pipeline-service";
import {Pipeline} from "../../../../models/pipeline";
import {TraceabilityDataService} from "../../../services/traceability-data-service";

@Component({
  selector: 'app-awaiting-validation-pipelines',
  templateUrl: './awaiting-validation-pipelines.component.html',
  styleUrls: ['./awaiting-validation-pipelines.component.scss']
})
export class AwaitingValidationPipelinesComponent implements OnInit {

  traceabilityDataService = new TraceabilityDataService();

  columnsToDisplayOnTable = [
    "UUID",
    "Name",
    "Description",
    "Date",
    "Tool",
    "Command"
  ];

  awaitingValidationPipelines: Pipeline[] = [];

  contentName = "Pipelines";

  constructor() { }

  ngOnInit(): void {
    this.traceabilityDataService.getAll().then(awaitingValidationPipelines => {
      this.awaitingValidationPipelines = awaitingValidationPipelines;
    })
  }

}

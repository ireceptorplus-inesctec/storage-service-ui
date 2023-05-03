import { Component, OnInit } from '@angular/core';
import {Pipeline} from "../../../../models/pipeline";
import {ValidatedTraceabilityDataService} from "../../../services/validated-traceability-data-service";

@Component({
  selector: 'app-validated-pipelines',
  templateUrl: './validated-pipelines.component.html',
  styleUrls: ['./validated-pipelines.component.scss']
})
export class ValidatedPipelinesComponent implements OnInit {

  traceabilityDataService = new ValidatedTraceabilityDataService();

  columnsToDisplayOnTable = [
    "UUID",
    "Command",
    "Creator"
  ];

  awaitingValidationPipelines: Pipeline[] = [];
  pipelinesLoaded: boolean = false;

  contentName = "Pipelines";

  constructor() { }

  ngOnInit(): void {
    this.traceabilityDataService.getAll().then(awaitingValidationPipelines => {
      this.awaitingValidationPipelines = awaitingValidationPipelines;
      for (let pipeline of this.awaitingValidationPipelines)
      {
        pipeline.blockchainState = "IN_VOTING_ROUND";
      }
      this.pipelinesLoaded = true;
    })
  }

}

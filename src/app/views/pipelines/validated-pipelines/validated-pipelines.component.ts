import { Component, OnInit } from '@angular/core';
import {Pipeline} from "../../../../models/pipeline";
import {ValidatedTraceabilityDataService} from "../../../services/validated-traceability-data-service";
import {TraceabilityDataService} from "../../../services/traceability-data-service";

@Component({
  selector: 'app-validated-pipelines',
  templateUrl: './validated-pipelines.component.html',
  styleUrls: ['./validated-pipelines.component.scss']
})
export class ValidatedPipelinesComponent implements OnInit {

  traceabilityDataService = new TraceabilityDataService();

  columnsToDisplayOnTable = [
    "UUID",
    "Command",
    "Creator"
  ];

  validatedPipelines: Pipeline[] = [];
  pipelinesLoaded: boolean = false;

  contentName = "Pipelines";

  constructor() { }

  ngOnInit(): void {
    this.traceabilityDataService.getValidated().then(validatedPipelines => {
      this.traceabilityDataService.getMyOrgDetails().then(walletDetails => {
        this.validatedPipelines = validatedPipelines;
        for (let pipeline of this.validatedPipelines)
        {
          pipeline.blockchainState = "IN_VOTING_ROUND";
          pipeline.creatorID.id = walletDetails.userId;
        }
        this.pipelinesLoaded = true;
      })
    })
  }

}

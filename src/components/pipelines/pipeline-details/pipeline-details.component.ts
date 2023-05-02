import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { FilesModel } from "../../../models/files";
import { environment } from "../../../environments/environment";
import { HttpClientService } from "../../../app/services/http-client-service";
import { Pipeline } from "../../../models/pipeline";
import { FilesTableComponent } from "../../files/files-table/files-table.component";
import {TraceabilityDataService} from "../../../app/services/traceability-data-service";
import {
  FilesCreateResultToastComponent
} from "../../files/files-create-result-toast/files-create-result-toast.component";
import {VoteResult} from "../../../models/VoteResult";

@Component({
  selector: 'pipeline-details',
  templateUrl: './pipeline-details.component.html',
  styleUrls: ['./pipeline-details.component.scss']
})
export class PipelineDetailsComponent {

  traceabilityDataService = new TraceabilityDataService();

  numberOfLinesToPreview: number = 5;

  @Input() pipeline: Pipeline = new Pipeline();

  public modalFileOpen = false;
  baseApiUrl: string = environment.apiUrl;
  filePreview!: string;

  @ViewChild(FilesTableComponent) filesTableComponent!: FilesTableComponent;

  @ViewChild(FilesCreateResultToastComponent) resultToast!: FilesCreateResultToastComponent;


  constructor() {
  }

  toggleModalFile() {
    this.modalFileOpen = !this.modalFileOpen;
  }

  public initModal(pipeline: Pipeline) {
    this.pipeline = pipeline;
  }

  handleModalFileChange(event: boolean) {
    this.modalFileOpen = event;
  }

  submitPipelineToBlockchain()
  {
    this.traceabilityDataService.create(this.pipeline).then((serverReturn: any) => {
      let returnedPipeline: Pipeline = serverReturn;
      this.resultToast.toggleToast("Traceability Data created successfully",
        "The traceability data entry that represents the pipeline was successfully added to the blockchain.");
    }, (serverReturn: Pipeline) => {
      this.resultToast.toggleToast("Traceability Data creation failed",
        "Server returned: " + serverReturn);
    });
  }

  runPipelineAndSubmitVote()
  {
    this.traceabilityDataService.runPipeline(this.pipeline).then((serverReturn: VoteResult) => {
      let voteResult: VoteResult = serverReturn;
      let creationResultMsgDescription = "The pipeline has run and the vote" + voteResult.voteType + " has been submitted to the blockchain. ";
      if (voteResult.stateChange)
        creationResultMsgDescription += "The vote has caused the blockchain traceability data entry to change state. ";
      creationResultMsgDescription += "Blokchain message returned: " + voteResult.message;

      this.resultToast.toggleToast("Pipeline in queue to run",
        creationResultMsgDescription);
    }, (serverReturn: any) => {
      this.resultToast.toggleToast("Pipeline has failed to run",
        "Server returned: " + serverReturn);
    });
  }

}

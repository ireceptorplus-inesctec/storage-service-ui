import { HttpClientService } from './http-client-service';
import {TraceabilityDataToBeSubmitted} from "../../models/traceability-data";
import {Pipeline} from "../../models/pipeline";
import {OrgDetails} from "../../models/orgDetails";

export class TraceabilityDataService extends HttpClientService<Pipeline> {
  constructor() {
    super('traceabilityData');
  }

  public runPipeline(pipeline: Pipeline): Promise<Pipeline> {
    const body = JSON.stringify(pipeline);
    return this.request(this.getFileTypeApiUrl() + '/run', 'POST', body);
  }

  public getMyOrgDetails(): Promise<OrgDetails> {
    return this.request(this.getFileTypeApiUrl() + '/getMyOrgDetails', 'GET');
  }
}

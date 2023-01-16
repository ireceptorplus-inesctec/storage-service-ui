import { HttpClientService } from './http-client-service';
import {TraceabilityDataToBeSubmitted} from "../../models/traceability-data";
import {Pipeline} from "../../models/pipeline";

export class ValidatedTraceabilityDataService extends HttpClientService<Pipeline> {
  constructor() {
    super('traceabilityData/validated');
  }

  public runPipeline(pipeline: Pipeline): Promise<Pipeline> {
    const body = JSON.stringify(pipeline);
    return this.request(this.getFileTypeApiUrl() + '/run', 'POST', body);
  }
}

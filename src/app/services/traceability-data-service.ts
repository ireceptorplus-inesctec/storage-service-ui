import { HttpClientService } from './http-client-service';
import {TraceabilityDataToBeSubmitted} from "../../models/traceability-data";
import {Pipeline} from "../../models/pipeline";

export class TraceabilityDataService extends HttpClientService<Pipeline> {
  constructor() {
    super('traceabilityData');
  }
}

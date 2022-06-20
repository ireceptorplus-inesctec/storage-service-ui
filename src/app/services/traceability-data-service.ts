import { HttpClientService } from './http-client-service';
import {TraceabilityDataToBeSubmitted} from "../../models/traceability-data";

export class TraceabilityDataService extends HttpClientService<TraceabilityDataToBeSubmitted> {
  constructor() {
    super('tool');
  }
}

import { HttpClientService } from './http-client-service';
import { Pipeline } from "../../models/pipeline";

export class FinishedPipelineService extends HttpClientService<Pipeline> {
  constructor() {
    super('finishedPipelines');
  }
}

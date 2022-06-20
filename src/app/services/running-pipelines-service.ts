import { HttpClientService } from './http-client-service';
import { Pipeline } from "../../models/pipeline";

export class RunningPipelineService extends HttpClientService<Pipeline> {
  constructor() {
    super('runningPipelines');
  }
}

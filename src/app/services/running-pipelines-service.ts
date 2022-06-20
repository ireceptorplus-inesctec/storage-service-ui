import { HttpClientService } from './http-client-service';
import {CreatedPipeline, FinishedPipeline} from "../../models/pipeline";

export class RunningPipelineService extends HttpClientService<FinishedPipeline> {
  constructor() {
    super('runningPipelines');
  }
}

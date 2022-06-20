import { HttpClientService } from './http-client-service';
import {CreatedPipeline, FinishedPipeline} from "../../models/pipeline";

export class FinishedPipelineService extends HttpClientService<FinishedPipeline> {
  constructor() {
    super('finishedPipelines');
  }
}

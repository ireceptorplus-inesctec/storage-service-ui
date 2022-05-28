import { HttpClientService } from './http-client-service';
import {CreatedPipeline} from "../../models/pipeline";

export class CreatedPipelineService extends HttpClientService<CreatedPipeline> {
  constructor() {
    super('data_processing');
  }
}

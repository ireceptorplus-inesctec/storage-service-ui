import { HttpClientService } from './http-client-service';
import { Pipeline } from "../../models/pipeline";

export class CreatedPipelineService extends HttpClientService<Pipeline> {
  constructor() {
    super('created_pipeline');
  }
}

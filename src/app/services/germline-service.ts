import { HttpClientService } from './http-client-service';
import { FilesModel } from 'src/models/files';

export class GermlineService extends HttpClientService<FilesModel> {
  constructor() {
    super('germline');
  }
}

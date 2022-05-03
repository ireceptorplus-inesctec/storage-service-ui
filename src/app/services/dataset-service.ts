import { HttpClientService } from './http-client-service';
import { FilesModel } from 'src/models/files';

export class DatasetService extends HttpClientService<FilesModel> {
  constructor() {
    super('dataset');
  }
}

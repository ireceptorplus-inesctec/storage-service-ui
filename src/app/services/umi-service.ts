import { HttpClientService } from './http-client-service';
import { FilesModel } from 'src/models/files';

export class UmiService extends HttpClientService<FilesModel> {
  constructor() {
    super('umi');
  }
}

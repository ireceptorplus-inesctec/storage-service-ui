import { HttpClientService } from './http-client-service';
import { FilesModel } from 'src/models/files';
import {Tool} from "../../models/tool";

export class ToolsService extends HttpClientService<Tool> {
  constructor() {
    super('tool');
  }
}

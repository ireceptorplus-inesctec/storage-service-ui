import { HttpClientService } from './http-client-service';
import {Command} from "../../models/Command";

export class CommandService extends HttpClientService<Command> {
  constructor() {
    super('command');
  }
}

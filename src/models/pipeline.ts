/**
 * A pipeline that was just created and, therefore, doesn't have output datasets yet.
 */
import {Command} from "./Command";

export class CreatedPipeline {
  uuid: string;
  name: string;
  description: string;
  creationDate: Date;
  inputDatasetsUuids: string[];
  command: Command;


  constructor() {
    this.uuid = "";
    this.name = "";
    this.description = "";
    this.creationDate = new Date();
    this.inputDatasetsUuids = new Array();
    this.command = new Command();
  }
}

export class Pipeline extends CreatedPipeline {
  outputDatasetsUuids: string[];

  constructor() {
    super();
    this.outputDatasetsUuids = new Array();
  }
}

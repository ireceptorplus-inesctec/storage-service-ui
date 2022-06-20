/**
 * A pipeline that was just created and, therefore, doesn't have output datasets yet.
 */
import {Command} from "./Command";
import {FilesModel} from "./files";

export class CreatedPipeline {
  uuid: string;
  name: string;
  description: string;
  creationDate: Date;
  inputDatasetsUuids: string[];
  commandId: number;
  command: Command;
  inputDatasets: FilesModel[];


  constructor() {
    this.uuid = "";
    this.name = "";
    this.description = "";
    this.creationDate = new Date();
    this.inputDatasetsUuids = new Array();
    this.commandId = 0;
    this.command = new Command();
    this.inputDatasets = [];
  }
}

export class FinishedPipeline extends CreatedPipeline {
  outputDatasetsUuids: string[];
  outputDatasets: FilesModel[];

  constructor() {
    super();
    this.outputDatasetsUuids = new Array();
    this.command = new Command();
    this.inputDatasets = [];
    this.outputDatasets = [];
  }
}

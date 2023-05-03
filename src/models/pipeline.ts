/**
 * A pipeline that was just created and, therefore, doesn't have output datasets yet.
 */
import {Command} from "./Command";
import {FilesModel} from "./files";
import {EntityID} from "./entityID";

export class Pipeline {
  uuid: string;
  name: string;
  description: string;
  creationDate: Date;
  inputDatasetsUuids: string[];
  commandId: number;
  command: Command;
  inputDatasets: FilesModel[];

  outputDatasetsUuids: string[];
  outputDatasets: FilesModel[];
  blockchainState: string;

  creatorID: EntityID;

  constructor() {
    this.uuid = "";
    this.name = "";
    this.description = "";
    this.creationDate = new Date();
    this.inputDatasetsUuids = new Array();
    this.commandId = 0;
    this.command = new Command();
    this.inputDatasets = [];
    this.inputDatasets = [];
    this.outputDatasets = [];
    this.outputDatasetsUuids = [];
    this.blockchainState = 'NOT_SUBMITTED';
    this.creatorID = new EntityID();
  }
}

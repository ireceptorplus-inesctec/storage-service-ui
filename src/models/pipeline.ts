/**
 * A pipeline that was just created and, therefore, doesn't have output datasets yet.
 */
export class CreatedPipeline {
  uuid: string;
  name: string;
  description: string;
  creationDate: Date;
  inputDatasetsUuids: string[];


  constructor() {
    this.uuid = "";
    this.name = "";
    this.description = "";
    this.creationDate = new Date();
    this.inputDatasetsUuids = new Array();
  }
}

export class Pipeline extends CreatedPipeline {
  outputDatasetsUuids: string[];

  constructor() {
    super();
    this.outputDatasetsUuids = new Array();
  }
}

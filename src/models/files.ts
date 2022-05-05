export class FilesModel {
    uuid: string;
    name: string;
    description: string;
    creationDate: Date;


  constructor() {
    this.uuid = "";
    this.name = "";
    this.description = "";
    this.creationDate = new Date();
  }
}

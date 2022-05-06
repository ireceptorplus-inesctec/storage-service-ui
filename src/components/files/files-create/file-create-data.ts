export class FileCreateData {
  name: string;
  description: string;
  file!: File;


  constructor() {
    this.name = "";
    this.description = "";
  }
}

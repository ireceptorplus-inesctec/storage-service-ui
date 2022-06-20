export class TraceabilityDataToBeSubmitted {
  name: string;
  version: string;
  url: string;
  description: string;
  docsReference: string;

  constructor(name: string, version: string, url: string, description: string, docsReference: string) {
    this.name = name;
    this.version = version;
    this.url = url;
    this.description = description;
    this.docsReference = docsReference;
  }
}

export class TraceabilityData extends TraceabilityDataToBeSubmitted {

}

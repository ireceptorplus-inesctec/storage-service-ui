/**
 * A pipeline that was just created and, therefore, doesn't have output datasets yet.
 */
import {Command} from "./Command";
import {FilesModel} from "./files";

export class OrgDetails {
  orgName: string;

  constructor() {
    this.orgName = "";
  }
}

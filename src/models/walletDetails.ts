/**
 * A pipeline that was just created and, therefore, doesn't have output datasets yet.
 */
import {Command} from "./Command";
import {FilesModel} from "./files";

export class WalletDetails {
  userId: string;
  orgName: string;

  constructor() {
    this.userId = "";
    this.orgName = "";
  }
}

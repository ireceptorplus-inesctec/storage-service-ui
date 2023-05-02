export class VoteResult {

  /**
   * The type of vote submitted. Can be YES or NO.
   */
  voteType: string;

  /**
   * A message describing the return.
   */
  message: string;

  /**
   * A boolean identifying whether the execution has caused the traceability information to change its state.
   */
  stateChange: boolean;

  constructor(voteType: string, message: string, stateChange: boolean) {
    this.voteType = voteType;
    this.message = message;
    this.stateChange = stateChange;
  }
}

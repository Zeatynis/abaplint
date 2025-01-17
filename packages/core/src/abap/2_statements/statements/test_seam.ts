import {IStatement} from "./_statement";
import {seq} from "../combi";
import {TestSeamName} from "../expressions";
import {IStatementRunnable} from "../statement_runnable";

export class TestSeam implements IStatement {

  public getMatcher(): IStatementRunnable {
    return seq("TEST-SEAM", TestSeamName);
  }

}
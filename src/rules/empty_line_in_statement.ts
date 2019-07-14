import {Issue} from "../issue";
import {ABAPRule} from "./_abap_rule";
import {ABAPFile} from "../files";
import {BasicRuleConfig} from "./_basic_rule_config";
import {Punctuation, Comment} from "../abap/tokens";

export class EmptyLineinStatementConf extends BasicRuleConfig {
  public allowChained: boolean = false;
}

export class EmptyLineinStatement extends ABAPRule {

  private conf = new EmptyLineinStatementConf();

  public getKey(): string {
    return "empty_line_in_statement";
  }

  public getDescription(): string {
    return "Empty line in statement";
  }

  public getConfig() {
    return this.conf;
  }

  public setConfig(conf: EmptyLineinStatementConf) {
    this.conf = conf;
  }

  public runParsed(file: ABAPFile) {
    const issues: Issue[] = [];

    const stru = file.getStructure();
    if (stru === undefined) {
      return [];
    }

    let prevLine: number | undefined = undefined;
    for (const t of file.getTokens()) {
      if (prevLine === undefined && t instanceof Comment) {
        continue;
      } else if (prevLine === undefined) {
        prevLine = t.getRow();
      }

      if (prevLine && t.getRow() - prevLine >= 2) {
        const issue = new Issue({file, message: this.getDescription(), key: this.getKey(), start: t.getStart()});
        issues.push(issue);
      }

      if (t instanceof Punctuation && t.getStr() === ".") {
        prevLine = undefined;
      } else if (this.conf.allowChained === true && t instanceof Punctuation && t.getStr() === ",") {
        prevLine = undefined;
      } else {
        prevLine = t.getRow();
      }
    }

    return issues;
  }

}
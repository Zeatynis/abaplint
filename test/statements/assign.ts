import {statementType, statementVersion} from "../utils";
import * as Statements from "../../src/statements/";
import {Version} from "../../src/version";

let tests = [
  "ASSIGN COMPONENT ls_field-name OF STRUCTURE ig_file TO <lv_field>.",
  "ASSIGN ('(SAPLSIFP)TTAB') TO <lg_any>.",
  "ASSIGN cs_tstcp-param(sy-fdpos) TO <lg_f>.",
  "ASSIGN cs_tstcp-param(sdf) TO <lg_f>.",
  "ASSIGN cs_tstcp-param TO <lg_f>.",
  "ASSIGN lo_obj->('HAS_ATTRIBUTES') TO <lv_has_attributes>.",
  "ASSIGN *foobar TO <INITIAL>.",
  "ASSIGN (classname)=>type TO <local_type>.",
  "assign lt_alv->* to <f_alv_tab>.",
  "ASSIGN <ls_aq_msg>-data TO <lv_data> CASTING TYPE (lv_tabname).",
  "ASSIGN COMPONENT <ls_component>-name OF STRUCTURE <lg_data> TO <lv_data> CASTING TYPE HANDLE lo_datadescr.",
  "ASSIGN lv_x TO <lv_y> CASTING.",
  "ASSIGN foo-bar INCREMENT lv_count TO <fs> CASTING RANGE ls_obj.",
  "ASSIGN lt_word INCREMENT 1 TO <word> RANGE struc.",
  "assign text+i(1) to <x> type 'X'.",
  "assign textline+tmp(*) to <fs>.",
  "assign falv->fcat[ fieldname = fieldname ] to field-symbol(<fcat>).",
  "ASSIGN TABLE FIELD (bar) TO <foo>.",
//  "ASSIGN (FOO) TO <Z-BAR>.",
];

statementType(tests, "ASSIGN", Statements.Assign);

let versions = [
  {abap: "ASSIGN entity->* TO FIELD-SYMBOL(<entity>).", ver: Version.v740sp02},
  {abap: "ASSIGN it_cols_width[ KEY primary_key col = lv_col ] TO FIELD-SYMBOL(<ls_cols_width>).", ver: Version.v740sp02},
];

statementVersion(versions, "ASSIGN", Statements.Assign);
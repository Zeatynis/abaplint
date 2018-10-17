import * as Structures from "./";
import * as Statements from "../statements";
import {Structure} from "./_structure";
import {alt, IStructureRunnable, star, sta, sub} from "./_combi";
import {MacroCall} from "../statements/statement";

export class Normal extends Structure {

  public getMatcher(): IStructureRunnable {
    return star(alt(sta(MacroCall),
                    sta(Statements.AddCorresponding),
                    sta(Statements.Add),
                    sta(Statements.Append),
                    sta(Statements.Assert),
                    sta(Statements.AssignLocalCopy),
                    sta(Statements.Assign),
                    sta(Statements.AuthorityCheck),
                    sta(Statements.Break),
                    sta(Statements.CallDatabase),
                    sta(Statements.CallDialog),
                    sta(Statements.CallFunction),
                    sta(Statements.CallKernel),
                    sta(Statements.CallOLE),
                    sta(Statements.CallScreen),
                    sta(Statements.CallSelectionScreen),
                    sta(Statements.CallTransaction),
                    sta(Statements.CallTransformation),
                    sta(Statements.Call),
                    sta(Statements.Check),
                    sta(Statements.Clear),
                    sta(Statements.CloseCursor),
                    sta(Statements.CloseDataset),
                    sta(Statements.Collect),
                    sta(Statements.Commit),
                    sta(Statements.Communication),
                    sta(Statements.Compute),
                    sta(Statements.Concatenate),
                    sta(Statements.Condense),
                    sta(Statements.Constant),
                    sta(Statements.Contexts),
                    sta(Statements.Continue),
                    sta(Statements.ConvertText),
                    sta(Statements.Convert),
                    sta(Statements.CreateData),
                    sta(Statements.CreateObject),
                    sta(Statements.CreateOLE),
                    sta(Statements.Data),
                    sta(Statements.DeleteCluster),
                    sta(Statements.DeleteDatabase),
                    sta(Statements.DeleteDataset),
                    sta(Statements.DeleteDynpro),
                    sta(Statements.DeleteInternal),
                    sta(Statements.DeleteMemory),
                    sta(Statements.DeleteReport),
                    sta(Statements.DeleteTextpool),
                    sta(Statements.Describe),
                    sta(Statements.Detail),
                    sta(Statements.Divide),
                    sta(Statements.EditorCall),
                    sta(Statements.Exit),
                    sta(Statements.ExportDynpro),
                    sta(Statements.Export),
                    sta(Statements.FieldSymbol),
                    sta(Statements.Find),
                    sta(Statements.Format),
                    sta(Statements.FreeMemory),
                    sta(Statements.FreeObject),
                    sta(Statements.Free),
                    sta(Statements.GenerateDynpro),
                    sta(Statements.GenerateReport),
                    sta(Statements.GenerateSubroutine),
                    sta(Statements.GetBadi),
                    sta(Statements.GetBit),
                    sta(Statements.GetCursor),
                    sta(Statements.GetDataset),
                    sta(Statements.GetLocale),
                    sta(Statements.GetParameter),
                    sta(Statements.GetPFStatus),
                    sta(Statements.GetProperty),
                    sta(Statements.GetReference),
                    sta(Statements.GetRunTime),
                    sta(Statements.GetTime),
                    sta(Statements.Hide),
                    sta(Statements.ImportDynpro),
                    sta(Statements.Import),
                    sta(Statements.InsertDatabase),
                    sta(Statements.InsertInternal),
                    sta(Statements.InsertReport),
                    sta(Statements.InsertTextpool),
                    sta(Statements.Leave),
                    sta(Statements.LoadReport),
                    sta(Statements.LogPoint),
                    sta(Statements.Message),
                    sta(Statements.ModifyLine),
                    sta(Statements.Modify),
                    sta(Statements.Move),
                    sta(Statements.Multiply),
                    sta(Statements.NewLine),
                    sta(Statements.NewPage),
                    sta(Statements.OpenCursor),
                    sta(Statements.OpenDataset),
                    sta(Statements.Overlay),
                    sta(Statements.Pack),
                    sta(Statements.Perform),
                    sta(Statements.Position),
                    sta(Statements.PrintControl),
                    sta(Statements.RaiseEvent),
                    sta(Statements.Raise),
                    sta(Statements.Read),
                    sta(Statements.ReadDataset),
                    sta(Statements.ReadLine),
                    sta(Statements.ReadReport),
                    sta(Statements.ReadTextpool),
                    sta(Statements.Receive),
                    sta(Statements.RefreshControl),
                    sta(Statements.Refresh),
                    sta(Statements.Replace),
                    sta(Statements.Return),
                    sta(Statements.Rollback),
                    sta(Statements.Scan),
                    sta(Statements.ScrollList),
                    sta(Statements.Search),
                    sta(Statements.Select),
                    sta(Statements.SetBit),
                    sta(Statements.SetBlank),
                    sta(Statements.SetCountry),
                    sta(Statements.SetCursor),
                    sta(Statements.SetDataset),
                    sta(Statements.SetExtendedCheck),
                    sta(Statements.SetHandler),
                    sta(Statements.SetLanguage),
                    sta(Statements.SetLeft),
                    sta(Statements.SetLocale),
                    sta(Statements.SetMargin),
                    sta(Statements.SetParameter),
                    sta(Statements.SetPFStatus),
                    sta(Statements.SetProperty),
                    sta(Statements.SetRunTime),
                    sta(Statements.SetScreen),
                    sta(Statements.SetTitlebar),
                    sta(Statements.SetUpdateTask),
                    sta(Statements.Shift),
                    sta(Statements.Skip),
                    sta(Statements.SortDataset),
                    sta(Statements.Sort),
                    sta(Statements.Static),
                    sta(Statements.Split),
                    sta(Statements.Stop),
                    sta(Statements.Submit),
                    sta(Statements.SubtractCorresponding),
                    sta(Statements.Subtract),
                    sta(Statements.SuppressDialog),
                    sta(Statements.SyntaxCheck),
                    sta(Statements.SystemCall),
                    sta(Statements.Transfer),
                    sta(Statements.Translate),
                    sta(Statements.Type),
                    sta(Statements.Uline),
                    sta(Statements.Unassign),
                    sta(Statements.Unpack),
                    sta(Statements.UpdateDatabase),
                    sta(Statements.Wait),
                    sta(Statements.Write),
                    sub(new Structures.Define()),
                    sub(new Structures.Loop()),
                    sub(new Structures.TestInjection()),
                    sub(new Structures.Case()),
                    sub(new Structures.CatchSystemExceptions()),
                    sub(new Structures.Try()),
                    sub(new Structures.Constants()),
                    sub(new Structures.Types()),
                    sub(new Structures.Statics()),
                    sub(new Structures.Select()),
                    sub(new Structures.Data()),
                    sub(new Structures.While()),
                    sub(new Structures.Do()),
                    sub(new Structures.If()),
                    sub(new Structures.ExecSQL())));
  }

}
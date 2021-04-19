import {Injectable } from "@angular/core";
import { IpostSearch } from "../interface/ipost-search";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class clsPostData implements IpostSearch{
  arrtypid:string = "0";
  cmdtyp:string = "0";
  konstartid:string = "0";
  publiceradJaNej:string = "";
  searchstr:string = "";
  startyear:string = "0";
  stopyear:string = "0";

}

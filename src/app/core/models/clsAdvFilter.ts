import { IAdvFilter } from './../interface/iadv-filter';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class clsAdvFilter implements IAdvFilter{
  konstform:string = "";
  bokningsbar:string = "";
  kostnad:number = 0;
  tid:number = 0;
  morklaggning:string = "";
  takhojd:string = "";
}

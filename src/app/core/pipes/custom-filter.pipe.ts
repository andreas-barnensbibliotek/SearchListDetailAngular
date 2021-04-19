import { clsAdvFilter } from './../models/clsAdvFilter';
import { IAdvFilter } from './../interface/iadv-filter';
import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'customFilter',
  pure: false
})
export class CustomFilterPipe implements PipeTransform {

  transform(listselection:any, konstform:string, bokningsbar:string, kostnad:number, tid:number, morklaggning:string, takhojd:string, filterMetadata:any):any {

    let returnlist:any;
    let filterTerms:IAdvFilter = new clsAdvFilter;
    filterTerms.konstform = konstform;
    filterTerms.bokningsbar = bokningsbar;
    filterTerms.kostnad= kostnad;
    filterTerms.tid= tid;
    filterTerms.morklaggning = morklaggning
    filterTerms.takhojd= takhojd

    // console.log(konstform+" - "+ bokningsbar);
    if(!listselection || !this.isfilterEmpty(filterTerms)){

      filterMetadata.count = listselection.length
      return listselection
    }else{
      // returnlist= _.filter(listselection, (itm)=>{ return itm.ansokningFilterfakta.Bokningsbar ==filterTerms.bokningsbar})

      returnlist= this.filterBokningsbar(listselection,filterTerms.bokningsbar);
      returnlist= this.filterKostnad(returnlist,filterTerms.kostnad);
      returnlist= this.filterSpeltid(returnlist,filterTerms.tid);
      returnlist= this.filterMorklaggning(returnlist,filterTerms.morklaggning);
      returnlist= this.filterTakhojd(returnlist,filterTerms.takhojd);
      filterMetadata.count = returnlist.length;

      return returnlist
    }

 }

 filterBokningsbar(tmplista:any,search:any){
  if(!_.isEmpty(search)){
    return _.filter(tmplista, (itm)=>{ return itm.ansokningFilterfakta.Bokningsbar ==search})
  }else{
    return tmplista;
  }
 }

 filterMorklaggning(tmplista:any,search:any){
  if(!_.isEmpty(search)){
    return _.filter(tmplista, (itm)=>{ return itm.ansokningFilterfakta.Morklaggning ==search})
  }else{
    return tmplista;
  }
 }

 filterTakhojd(tmplista:any,search:any){
  if(!_.isEmpty(search)){
    return _.filter(tmplista, (itm)=>{ return itm.ansokningFilterfakta.Takhojd ==search})
  }else{
    return tmplista;
  }
 }

 filterSpeltid(tmplista:any,search:number){
  if(search>0){
    return _.filter(tmplista, (itm)=>{ return itm.ansokningFilterfakta.Speltid <=search.toString()})
  }else{
    return tmplista;
  }
 }

 filterKostnad(tmplista:any,search:number){
  if(search>0){
    return _.filter(tmplista, (itm)=>{ return itm.ansokningFilterfakta.Kostnad <=search})
  }else{
    return tmplista;
  }
 }

 isfilterEmpty(filter:IAdvFilter){

  if(filter.bokningsbar){
    return true;
  }
  if(filter.konstform){
    return true;
  }
  if(filter.kostnad){
    return true;
  }
  if(filter.morklaggning){
    return true;
  }
  if(filter.takhojd){
    return true;
  }
  if(filter.tid){
    return true;
  }

  return false;
 }
}

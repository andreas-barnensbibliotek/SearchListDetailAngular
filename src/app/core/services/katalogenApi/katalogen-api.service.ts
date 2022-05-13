import { ApiServiceService } from '../api-service.service';
import { HttpClient } from '@angular/common/http';
import { Global } from '../../models/global';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { IpostSearch } from '../../interface/ipost-search';

@Injectable({
  providedIn: 'root'
})
export class KatalogenApiService extends ApiServiceService  {
  private _currentPageDataHandler: Subject<void> = new Subject<void>();
  get currentPageDataHandler(){
    return this._currentPageDataHandler
    // Global event handler ------
  }

  constructor(Http:HttpClient, private _glb:Global) {
    super("",Http);
  }

  getKatalogList(postdata:IpostSearch){
    let url:string = this._glb.server +"/search/mainsearch/devkey"+ this._glb.devkey;
    return this.doPost(url,postdata);
  }

  getfreeSearchList(postdata:IpostSearch){
    let url:string = this._glb.server +"/search/freesearch/devkey"+ this._glb.devkey;
    return this.doPost(url,postdata);
  }

  getByArrId(arrid:any){ //Get all categories: id= 0
    let url:string = this._glb.server +"/arrangemang/all_details/uid/0/typ/"+ arrid +"/devkey"+ this._glb.devkey;
    return this.getPosts(url);
  }
}

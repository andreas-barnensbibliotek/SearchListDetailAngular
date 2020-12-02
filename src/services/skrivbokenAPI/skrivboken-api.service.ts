import { Subject } from 'rxjs';
import { Global } from './../../app/models/global';
import { HttpClient } from '@angular/common/http';

import { ApiServiceService } from './../api-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkrivbokenAPIService extends ApiServiceService {

  private _currentPageDataHandler: Subject<void> = new Subject<void>();
  get currentPageDataHandler(){
    return this._currentPageDataHandler
    // Global event handler ------
  }

  constructor(Http:HttpClient, private _glb:Global) { 
    super("",Http);
  }
  getByCatId(id:any){ //Get all categories: id= 0
    let url:string = this._glb.server +"/bycatid/"+ id + this._glb.devkey;
    return this.getPosts(url);
  }
  getByUserId(id:any){ 
    let url:string = this._glb.server +"/byuserid/"+ id + this._glb.devkey;
    return this.getPosts(url);
  }
  getByUserName(username:any){ 
    let url:string = this._glb.server +"/byuser/"+ username + this._glb.devkey;
    return this.getPosts(url);
  }
}

// API requests - Jsonp
// https://api.barnensbibliotek.se/Api_v1/skrivboken/bycatid/0/devkey/alf?callback=jQuery3210017615843496012085_1605855592091&_=1605855592094
// https://api.barnensbibliotek.se/Api_v1/skrivboken/bycatid/8/devkey/alf?callback=jQuery3210017615843496012085_1605855592091&_=1605855592095
// https://api.barnensbibliotek.se/Api_v1/skrivboken/byuserid/38194/devkey/alf?callback=jQuery3210017615843496012085_1605855592091&_=1605855592097
// https://api.barnensbibliotek.se/Api_v1/skrivboken/byuser/esipesi/devkey/alf?callback=jQuery3210017615843496012085_1605855592091&_=1605855592096
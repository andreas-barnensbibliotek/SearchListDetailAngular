import { Subject } from 'rxjs';
import { Global } from '../../models/global';
import { HttpClient } from '@angular/common/http';

import { ApiServiceService } from '../api-service.service';
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
// POST
// {
// 	"arrtypid": "",
// 	"cmdtyp": "",
// 	"konstartid": "",
// 	"publiceradJaNej": "",
// 	"searchstr": "",
// 	"startyear": "",
// 	"stopyear": ""
// }
// http://localhost:60485/Api_v2/search/mainsearch/devkey/alf?type=json&callback=testar


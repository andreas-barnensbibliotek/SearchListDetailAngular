import { Subject } from 'rxjs';
import { Global } from '../../models/global';
import { HttpClient } from '@angular/common/http';

import { ApiServiceService } from '../api-service.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WpApiService extends ApiServiceService {

//translate kod:  https://medium.com/@ivywalobwa/use-google-translation-api-in-your-angular-app-d55096bbbe67

  //private server:string ="http://localhost:81/Angular_wp/wpAdmin/wp-json/wp/v2/";
  //private server:string ="http://dev.frontdata.se/lasfirman/wpAdmin/wp-json/wp/v2/";

  constructor(Http:HttpClient, private _global:Global) {
    super("",Http);
  }

  private _currentPageDataHandler: Subject<void> = new Subject<void>();
  get currentPageDataHandler(){
    return this._currentPageDataHandler
  }

  getMeny(meny:any){
    let url:string = this._global.server +"menu_"+ "?filter[orderby]=date&order=desc";
    return this.getPosts(url);
  }


  getPageSlug(slug:any){
    let url:string = this._global.server +"Content_"+ "?slug="+slug;
    console.log("getPageSlug URL: " + url);
    return this.getPosts(url);
  }

  postRegisterUser(formdata:any){
    let url:string = this._global.server +"?post_type=RegisterUser";
    console.log("getPageSlug URL: " + url);
    console.log(formdata);
    return this.doPost(url,formdata);
  }

}

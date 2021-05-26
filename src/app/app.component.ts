import { Global } from './core/models/global';
import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'kk_aj_kulturkatalogenvästAngular';
  elipsIcon = faEllipsisV;
debug:any=""
menyopen:boolean;

  constructor(public glb:Global, private location: LocationStrategy, ){
    history.pushState(null, null, window.location.href);
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);

    });

    this.glb.mainJsonKatalogItemListHandler.subscribe(()=>{
    });
  }
  ngOnInit() {
    // this.activatedRoute.queryParams.subscribe(values => {
    //   console.log(values);//Which will print the properties you have passed
    // });
  }

  countChange(event) {
    console.log("parent" + event)
    // if(event =="false"){
     this.menyopen=false;

    // }
  }

  openMeny(){
    this.menyopen=true;

  }

}

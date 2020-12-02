import { Global } from './models/global';
import { Component } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { LocationStrategy } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ajSkrivbokenV3Angular';
  elipsIcon = faEllipsisV;

  constructor(private glb:Global, private location: LocationStrategy){
    // history.pushState(null, null, window.location.href);
    // // check if back or forward button is pressed.
    // this.location.onPopState(() => {
    //     history.pushState(null, null, window.location.href);
        
    // });
  }
}

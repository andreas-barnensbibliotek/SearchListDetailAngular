
import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { LocationStrategy } from '@angular/common';
import { Global } from '../core/models/global';

@Component({
  selector: 'app-katalogen-main',
  templateUrl: './katalogen-main.component.html',
  styleUrls: ['./katalogen-main.component.scss']
})
export class KatalogenMainComponent implements OnInit {
  elipsIcon = faEllipsisV;
debug:any=""

  constructor(public glb:Global, private location: LocationStrategy, ){
    history.pushState(null, null, window.location.href);
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);

    });

  }
  ngOnInit() {
  }
}

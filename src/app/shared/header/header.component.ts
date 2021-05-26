import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Global } from 'src/app/core/models/global';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public changeMeny = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {


  }
  closeMeny(){
    console.log("klickad");
    this.changeMeny.emit(false);

  }
}

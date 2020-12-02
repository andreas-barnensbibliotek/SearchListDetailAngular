import { Global } from './../../models/global';
import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faPrint, faThumbsUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-detailpage',
  templateUrl: './detailpage.component.html',
  styleUrls: ['./detailpage.component.scss']
})
export class DetailpageComponent implements OnInit {
  ico_fa_tumbsup = faThumbsUp;
  ico_fa_print = faPrint;
  ico_fa_chevron= faChevronLeft;
  likes:number= 0;

  detailpage:any=[];

  constructor(private glb:Global) { }

  ngOnInit(): void {
    this.detailpage= this.glb.getTextBySkrivid(this.glb.currentdetailSkrivid);
    console.log(this.detailpage);

  }
  gotodetail(id:any){
    this.glb.showMainpage();
    
  }

  like(){
    this.likes +=1;
    console.log("like");
    return false;
  }
}

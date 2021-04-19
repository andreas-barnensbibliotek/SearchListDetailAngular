import { Global } from '../../core/models/global';
import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faPrint, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private glb:Global, ) {
    // this.activatedRoute.queryParams.subscribe(data=>{
    //   console.log("param: " + data);
    // })
    window.history.pushState("object or string", "Title", "/new-url");
  }

  ngOnInit(): void {
    this.detailpage= this.glb.getTextBySkrivid(this.glb.currentAnsokningid);
    console.log(this.detailpage);

  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);

  }

  gotodetail(id:any){

    this.glb.showMainpage();
    window.history.pushState("object or string", "Title", "/");

  }

  like(){
    this.likes +=1;
    console.log("like");
    return false;
  }

  scroll(skrivid:any) {
    // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
    document.querySelector(skrivid).scrollIntoView();
  }
}

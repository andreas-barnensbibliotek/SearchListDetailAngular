import { Global } from '../../core/models/global';
import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faPrint, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

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

  constructor(private glb:Global, private activatedRoute:ActivatedRoute,private router:Router,private location: Location) {
    this.activatedRoute.queryParams.subscribe(data=>{
      console.log("param: " + data);
    })
  }

  ngOnInit(): void {
    this.detailpage= this.glb.getTextBySkrivid(this.glb.currentAnsokningid);
    console.log(this.detailpage);

  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);

  }

  gotodetail(id:any){
    // this.location.back()
    // if(url=="#") return false;
    //  this.router.navigateByUrl(url);
    this.glb.showMainpage();

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

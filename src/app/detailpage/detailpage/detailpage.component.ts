import { Global } from '../../core/models/global';
import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faPrint, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import { map } from 'rxjs/operators';

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
  currpageSlug:any;
  constructor(private glb:Global, private activatedRoute:ActivatedRoute,private router:Router,private location: Location) {

  }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(prams =>{
      this.glb.currentAnsokningid = prams.get('id');
    });

    // this.detailpage= this.glb.getTextBySkrivid(this.glb.currentAnsokningid);

    console.log("filter är: " + this.glb.filterform.kostnad);
    // console.log(this.detailpage);

  }

  ngAfterViewChecked() {
    window.scrollTo(0, 0);

  }

  gotodetail(id:any){
    this.location.back()
    // if(url=="#") return false;
    //  this.router.navigateByUrl(url);

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

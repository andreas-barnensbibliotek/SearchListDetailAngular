import { SkrivbokenAPIService } from './../../../services/skrivbokenAPI/skrivboken-api.service';
import { LocationStrategy } from '@angular/common';
import { Global } from './../../models/global';
import { Component, OnInit } from '@angular/core';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {
  mainPageData:any=[];
  mainCategoryname:any;
  elipsIcon = faEllipsisV;
  tmpStyles:any;

  constructor(private wpApi:SkrivbokenAPIService, private glb:Global, private location: LocationStrategy) { 
    
    history.pushState(null, null, window.location.href);
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);
        
    });

  }

  ngOnInit(): void {
    
    this.getpagedata();
    // this.showPageMax = this.glb.showPageMax;
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      // handles global events
    });

  }

  ngAfterViewChecked() {
    if(this.glb.currentdetailSkrivid>0){
      this.scroll('#goto'+ this.glb.currentdetailSkrivid);
      this.glb.currentdetailSkrivid=0;
    }
    
  }

  loadPageData(id:string){        
      this.wpApi.getByCatId(id).subscribe(Response => {
        this.glb.mainJsonSkrivbokList = Response         
        this.mainCategoryname= this.glb.getCategoryName(Number(id));
        this.mainPageData= this.glb.mainJsonSkrivbokList;
       
      });    
  }
  
  getpagedata(){
    if(this.glb.isEmptyObj(this.glb.mainJsonSkrivbokList.Skrivbokenlist)){
      this.pagedataSetting();
      this.loadPageData("0");      
      this.mainCategoryname= this.glb.getCategoryName(0);
    }else{
      console.log(this.glb.showPageMax + " glb.pageSize: "+ this.glb.pageSize);
      this.mainCategoryname= this.glb.currentCategoryName;
      this.mainPageData= this.glb.mainJsonSkrivbokList;
      
    }
  }

  getCatOnClick(id:any){
    this.mainPageData=[];
    this.mainCategoryname= this.glb.getCategoryName(9999);
    this.loadPageData(id);  
    // this.test();
    this.pagedataSetting();
  }

  gotodetail(id:any){
    this.glb.currentdetailSkrivid= id;
    this.glb.showDetailpage();    
  }

  showmoreposts(){
    if(this.glb.mainJsonSkrivbokList.Antal > this.glb.showPageMax){
      let tempantal= this.glb.showPageMax + this.glb.pageSize;
      
      if(tempantal>this.glb.mainJsonSkrivbokList.Antal){        
        this.glb.showPageMax = this.glb.mainJsonSkrivbokList.Antal;
        this.glb.showMoreBtn= false;

      }else{
         this.glb.showPageMax = tempantal;         
      }     
     
      if(this.glb.mainJsonSkrivbokList.length <=0){
        this.loadPageData("0");      
        this.mainCategoryname= this.glb.getCategoryName(0);
      }else{
        this.mainPageData= this.glb.mainJsonSkrivbokList;
      }
    }
  }

  pagedataSetting(){
    this.glb.showPageMax= 12;
    this.glb.pageSize=3;
    this.glb.showMoreBtn= true;
  }
  
  setBGClasses(catID) {
    return this.glb.catstylehandler(catID).imgbgClass;
    
  }

  setTxtClasses(catID) {
        let tmpfontobj =this.glb.catstylehandler(catID) 

        return tmpfontobj.rubfontClass + " " +tmpfontobj.rubColorClass
  }

  seticoClasses(catID) {
    return this.glb.catstylehandler(catID).catIconClass;
  }

  seticoBGClasses(catID) {
    return this.glb.catstylehandler(catID).catIconBGClass;
  } 
  
  scroll(skrivid) {
    // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
    document.querySelector(skrivid).scrollIntoView();
  }

  test(){
    let lista:any=[]
    lista = this.glb.getCategorysearch("häst")
    let namn= lista;
    console.log("kör: " + namn[1].Title);
  }

}

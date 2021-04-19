import { clsAdvFilter } from './../../core/models/clsAdvFilter';
import { KatalogenApiService } from 'src/app/core/services/katalogenApi/katalogen-api.service';
import { LocationStrategy } from '@angular/common';
import { Global } from 'src/app/core/models/global';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import { IpostSearch } from 'src/app/core/interface/ipost-search';
import { clsPostData } from 'src/app/core/models/clsPostData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  p:number=1;
  mainPageData:any=[];
  mainCategoryname:any;
  elipsIcon = faEllipsisV;
  currarrid:number= 0;
  currfid:number= 0;
  currAgeid:number=0;
  currsearchstr:string;
  tmpStyles:any;
  resultatantal:any;
  showPageMax:any;
  keyword = 'ansokningtitle';
  autocompletedata:any = [];
  showNoPostToShow:boolean= false;
  filterMetadata:any= { count: -1 };

  filterterm:clsAdvFilter=new clsAdvFilter
  postdata:IpostSearch = new clsPostData;
debug:any="test"
  constructor(private wpApi:KatalogenApiService, private glb:Global, private location: LocationStrategy,private cd:ChangeDetectorRef, ) {

console.log("href: " + window.location.href)
    this.showPageMax= glb.showPageMax;
    history.pushState(null, null, window.location.href);
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
        history.pushState(null, null, window.location.href);
    });
  }

  ngOnInit(): void {
    // this.debug= this.activatedRoute.snapshot.queryParams
    this.getpagedata();
    this.wpApi.currentPageDataHandler.subscribe(()=>{
      // handles global events
    });
    this.glb.mainJsonKatalogItemListHandler.subscribe(()=>{
      this.getpagedata();
    });
  }

  ngAfterViewChecked() {
    this.cd.detectChanges(); // använd för att inte får expressionchangedAfterItHasbeenCheckedError
  }

  getpagedata(){
    console.log("laddar ny data: ", this.glb.mainJsonKatalogItemList);
    if(this.glb.isEmptyObj(this.glb.mainJsonKatalogItemList)){
      this.loadPageData(this.postdata);
    }else{
      console.log("data finns: ", this.glb.mainJsonKatalogItemList.kk_aj_admin);

      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar;
      this.resultatantal = this.mainPageData.length;
      // console.log(this.glb.showPageMax + " glb.pageSize: "+ this.glb.pageSize);
      // this.mainCategoryname= this.glb.currentCategoryName;
    }
  }

  loadPageData(srhdata:IpostSearch){
    this.resetsearch();
    this.mainPageData=[];
    this.wpApi.getKatalogList(srhdata).subscribe(Response => {
      this.glb.mainJsonKatalogItemList = Response
      // this.resultatantal = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount;

      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar;
      this.resultatantal = this.mainPageData.length;
      console.log("ny data är laddad: ", this.glb.mainJsonKatalogItemList);
      this.noresult();
    })
  }

  loadFreetextSearchData(srhdata:IpostSearch){
    this.resetsearch();
    this.wpApi.getfreeSearchList(srhdata).subscribe(Response => {
      this.glb.mainJsonKatalogItemList = Response
      this.resultatantal = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount
      this.mainPageData = this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar

    })
  }

  noresult(){
    let antal:number = Number(this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningarcount)
    this.showNoPostToShow= false;
    if(antal<=1){
      if(this.glb.mainJsonKatalogItemList.kk_aj_admin.ansokningarlista.ansokningar[0].ansokningtitle == "Finns inget att visa"){
        this.showNoPostToShow= true
      }
    }
  }

  resetsearch(){
    this.resultatantal=0;
    this.showNoPostToShow = false;
  }

  MainSearchFormClick(){
    this.loadPageData(this.postdata);
    this.resetAdvsearchform();
    this.showNoPostToShow = false;
    this.scroll('#AnchorSearchlist');
  }

  formFreetextSearchClick(){
    if(this.currsearchstr){
      this.postdata = new clsPostData
      this.postdata.searchstr = this.currsearchstr;

      this.loadFreetextSearchData(this.postdata);
      this.scroll('#AnchorSearchlist');
    }
    return false;
  }

  formArrClick(arrid:number){
    this.currarrid= arrid;
    this.postdata.arrtypid = String(arrid);
  }

  formKonstFormClick(konstformid:number){
    this.currfid= konstformid;
    this.postdata.konstartid = String(konstformid);
  }

  ageFormClick(ageformStartYear:number,ageformStopYear:number){
    this.currAgeid= ageformStopYear;
    this.postdata.startyear = String(ageformStartYear);
    this.postdata.stopyear = String(ageformStopYear);
  }

  resetFormClick(){
    this.postdata = new clsPostData;
    this.currarrid = Number(this.postdata.arrtypid);
    this.currfid = Number(this.postdata.konstartid);
    this.currAgeid= 0;
  }

  resetAdvsearchform(){
    this.filterterm.takhojd ="";
    this.filterterm.bokningsbar="";
    this.filterterm.kostnad=0;
    this.filterterm.morklaggning="";
    this.filterterm.tid=0;
    return false;
  }

  autocompleteGetData(searchobj:IpostSearch){
    this.wpApi.getfreeSearchList(searchobj).subscribe(Response => {
      let tmpobj:any= Response
      this.autocompletedata = tmpobj.kk_aj_admin.ansokningarlista.ansokningar
    })
  }
  selectEvent(item) {
    this.currsearchstr = item.ansokningtitle
    console.log(item.ansokningtitle)
    this.formFreetextSearchClick()
  }
  onChangeSearch(val: string) {
    let tmpauto:IpostSearch = new clsPostData
    tmpauto.searchstr= val;
    this.currsearchstr = val;
    this.autocompleteGetData(tmpauto);
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  onFocused(e){
    // do something when input is focused
  }

  autofilter(){
    return (items) => items
  }

  sorteralista(typ:string){
    console.log("typ: " + typ);
    this.glb.filterSortera(typ);
  }

  scroll(skrivid) {
    document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
  }

  hideSpinner(antalposter:number){
    antalposter= this.filterMetadata.count
    let retobj:boolean= false;

    if(antalposter==0){
      retobj = true;
    }
    return retobj;
  }

  gotodetail(id:any){
    this.glb.currentAnsokningid= id;
    this.glb.showDetailpage();
  }
}

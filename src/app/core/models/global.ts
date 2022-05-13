
import { categoryStyles } from './categoryStyles';
import * as _ from 'lodash';
import {Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {

    private _liveAPI:string = "https://api.kulturkatalogenvast.org";
    private _devAPI:string = "https://devapi.kulturkatalogenvast.org";
    private _SandboxAPI:string = "https://sandboxapi.kulturkatalogenvast.org";
    private _localdevserver:string = "http://localhost:60485";

    private _usedServer:string = this._liveAPI; // <-- denna används
    private _cmdApi:string = "/Api_v2";

    mainJsonKatalogItemList:any =[];
    showPageMax:number= 10;
    pageSize:number;
    showMoreBtn:boolean;

    blnMainpage:boolean = true;
    blnDetailpage:boolean= false;
    currentAnsokningid:any=0;
    currentCategoryName:any;
    currentpage:number;
    filterform:any;
    server:string = this._usedServer + this._cmdApi;
    devkey:string = "/alf/?type=json";
    showspinner:boolean= true;
    testtotal:any;

    private _mainJsonKatalogItemListHandler: Subject<void> = new Subject<void>();
    get mainJsonKatalogItemListHandler(){
      return this._mainJsonKatalogItemListHandler;
      // Global event handler ------
    }

    constructor(private catstyleobj:categoryStyles){
        this.showMainpage();
    }

    getskrivbokenPublicList(){
        return this.mainJsonKatalogItemList.Skrivbokenlist;
    }

    public getTextBySkrivid(skrivid:number){
      let usrlang:any=""

      if(skrivid){
         usrlang = this.getskrivbokenPublicList().find(i => i.SkrivID === skrivid);
      }

        return usrlang;
      }

    public getCategoryName(id:number){
        let nameobj = this.categorynameList().find(i => i.id === id);
        this.currentCategoryName= nameobj.name;
        return nameobj;
    }
    public getCategorysearch(search:string){
        let arr:any = [];
        arr.push(this.getskrivbokenPublicList().filter(function (el) {
             if(el.Title.includes(search) || el.Title.startsWith(search)){
                return el;
            }
          }))
          return arr[0];

    }

    public categorynameList() {
        return [
            { id: 0, name: 'Alla' },
            { id: 9999, name: 'Laddar' },
            { id: 3, name: 'Berättelse'},
            { id: 8, name: 'Deckare'},
            { id: 4, name: 'Dikt'},
            { id: 9, name: 'Djur'},
            { id: 10, name: 'Fantasy'},
            { id: 16, name: 'Humor' },
            { id: 12, name: 'Kärlek'},
            { id: 21, name: 'Hästar'},
            { id: 13, name: 'Ramsa'},
            { id: 11, name: 'Skräck'},
            { id: 15, name: 'Sorgligt'},
            { id: 17, name: 'Spänning'},
            { id: 18, name: 'Spöken'},
            { id: 5, name: 'Tankar' },
            { id: 19, name: 'Äventyr'},
            { id: 6, name: 'Övrigt'}
        ];
    }

    filterlodash(){
      let catlist = this.categorynameList();
      // let svar = _.filter(catlist, ['name', 'Djur']);
      let svar = _.filter(catlist, (itm)=>{ return itm.id >10});
      svar = _.orderBy(svar, ['name'], ['asc']);

      let object = _.assign({}, svar);
      return object
    }

    filterSortera(typ:string){
      let mainArrlist = this.mainJsonKatalogItemList;
      // let svar = _.filter(catlist, ['name', 'Djur']);
      // let svar = _.filter(mainArrlist, (itm)=>{ return itm.id >10});
      if(!typ){ typ='asc';}

      let listselection = _.get(mainArrlist, 'kk_aj_admin.ansokningarlista.ansokningar')
      mainArrlist.kk_aj_admin.ansokningarlista.ansokningar= _.orderBy(listselection, 'ansokningtitle', typ )

      this.mainJsonKatalogItemList= mainArrlist;
      this.mainJsonKatalogItemListHandler.next();
    }

    private filterstartlist:any =[];

    Advancedfilter(cmd:string,jsonlist:any,val:any){

      // let svar = _.filter(catlist, ['name', 'Djur']);
      // let svar = _.filter(mainArrlist, (itm)=>{ return itm.id >10});
    //  if(this.isEmptyObj(this.filterstartlist)){
    //   this.filterstartlist = this.mainJsonKatalogItemList;
    //  }

     if(cmd =='reset'){
        return jsonlist
      }else{
        let mainArrlist = jsonlist;
        let listselection = _.get(mainArrlist, 'kk_aj_admin.ansokningarlista.ansokningar')
         return mainArrlist.kk_aj_admin.ansokningarlista.ansokningar= _.filter(listselection, (itm)=>{ return itm.ansokningFilterfakta.Bokningsbar ==val})

      }
    }
    resetFilter(){
      if(!this.isEmptyObj(this.filterstartlist)){
        this.mainJsonKatalogItemList =this.filterstartlist;
        this.filterstartlist=[];
      }
    }

    showMainpage(){
        this.hidepages();
        this.blnMainpage= true;
    }

    showDetailpage(){
        this.hidepages();
        this.blnDetailpage= true;
    }

    hidepages(){
        this.blnMainpage= false;
        this.blnDetailpage= false;
    }

    catstylehandler(catid:any){
        let styleobj = this.catstyleobj.catStyleConfig().find(i => i.catid === catid);
        return styleobj;

    }
    public isEmptyObj = (obj) => {
        return obj === null || undefined
            ? true
            : (() => {
                for (const prop in obj) {
                  if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                    return false;
                  }
                }
                return true;
              })();
        };


};

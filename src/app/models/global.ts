
import { categoryStyles } from './categoryStyles';

import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {

    private _liveserver:string = "https://centrestageonline.org";
    private _devserver:string = "https://api.barnensbibliotek.se";
    private _localdevserver:string = "http://localhost:81/centrestageonline.org";
    
    private _cmdApi:string = "/Api_v1/skrivboken";
    
    mainJsonSkrivbokList:any =[];
    showPageMax:number;
    pageSize:number;
    showMoreBtn:boolean;

    blnMainpage:boolean = true;
    blnDetailpage:boolean= false;
    currentdetailSkrivid:any=0;
    currentCategoryName:any;

    server:string = this._devserver + this._cmdApi;    
    devkey:string = "/devkey/alf/?type=json";     

    constructor(private catstyleobj:categoryStyles){                    
        this.showMainpage();
    }

    getskrivbokenPublicList(){        
        return this.mainJsonSkrivbokList.Skrivbokenlist;
    }

    public getTextBySkrivid(skrivid:number){              
        let usrlang = this.getskrivbokenPublicList().find(i => i.SkrivID === skrivid);             
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

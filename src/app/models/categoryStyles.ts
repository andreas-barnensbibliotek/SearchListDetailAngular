// import { LocalStorageHandler } from './localstorageHandler';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class categoryStyles {

    catStyleConfig(){
        let classeslist={                                    
                imgbgClass:{
                    karlek2:        "dantooine-post-cover-img-karlek",
                    slott:          "dantooine-post-cover-img-slott",
                    hastar2:        "dantooine-post-cover-img-hastar",
                    karlek:         "dantooine-post-cover-bg-rosa",
                    deckare:        "dantooine-post-cover-bg-orange",
                    aventyr:        "dantooine-post-cover-bg-lightblue",
                    berattelse:     "dantooine-post-cover-bg-lila",
                    djur:           "dantooine-post-cover-bg-brown",
                    fantasy:        "dantooine-post-cover-bg-neonblue",
                    hastar:         "dantooine-post-cover-bg-lightrosa",
                    skrack:         "dantooine-post-cover-bg-grey",
                    skrack2:        "dantooine-post-cover-bg-grey2",
                    berattelse2:    "icon-bb-berattelse2",
                    deckare2:       "icon-bb-deckare2",
                    default:        "dantooine-post-cover-bg-lightgrey",
                    dikt:           "dantooine-post-cover-bg-lightgreen",
                    ovrigt:         "dantooine-post-cover-bg-lightbrun",
                    ramsa:          "dantooine-post-cover-bg-lightgul",
                    spanning:       "dantooine-post-cover-bg-lightorange",
                    skratta:        "dantooine-post-cover-bg-lightgreen",
                    sorgligt:       "dantooine-post-cover-bg-lightlila",
                    spoken:         "dantooine-post-cover-bg-lightgrey",
                    tankar:         "dantooine-post-cover-bg-lightgul"                   
                },
                rubfontClass:{
                    aventure: "dantooine-post-cover-text-font-adventure",
                    love: "dantooine-post-cover-text-font-love",
                    cartoon: "dantooine-post-cover-text-font-cartoon",
                },
                rubColorClass:{
                    blue: "dantooine-post-cover-text-blue",
                    black: "dantooine-post-cover-text-black",
                    red: "dantooine-post-cover-text-red",
                },
                catIconClass:{
                    karlek:         "icon-bb-karlek",
                    deckare:        "icon-bb-deckare",
                    aventyr:        "icon-bb-aventyr",
                    berattelse:     "icon-bb-berattelse",
                    djur:           "icon-bb-djur",
                    fantasy:        "icon-bb-fantasy",
                    hastar:         "icon-bb-hastar",
                    skrack:         "icon-bb-skrack2",
                    skrack2:        "icon-bb-skrack2",
                    penna:          "icon-bb-penna",
                    berattelse2:    "icon-bb-berattelse2",
                    deckare2:       "icon-bb-deckare2",
                    default:        "icon-bb-default",
                    dikt:           "icon-bb-dikt",
                    ovrigt:         "icon-bb-ovrigt",
                    ramsa:          "icon-bb-ramsa",
                    spanning:       "icon-bb-spanning",
                    skratta:        "icon-bb-skratta",
                    sorgligt:       "icon-bb-sorgligt",
                    spoken:         "icon-bb-spoken",
                    tankar:         "icon-bb-tankar"                    
                },
                catIconBG:{
                    karlek:         "btn-dantooine-karlek",
                    deckare:        "btn-dantooine-deckare",
                    aventyr:        "btn-dantooine-aventyr",
                    berattelse:     "btn-dantooine-berattelse",
                    djur:           "btn-dantooine-djur",
                    fantasy:        "btn-dantooine-fantasy",
                    hastar:         "btn-dantooine-hastar",
                    skrack:         "btn-dantooine-skrack",
                    skrack2:        "btn-dantooine-skrack",
                    penna:          "btn-dantooine-penna",
                    berattelse2:    "btn-dantooine-berattelse2",
                    deckare2:       "btn-dantooine-deckare2",
                    default:        "btn-dantooine-default",
                    dikt:           "btn-dantooine-dikt",
                    ovrigt:         "btn-dantooine-ovrigt",
                    ramsa:          "btn-dantooine-ramsa",
                    spanning:       "btn-dantooine-spanning",
                    skratta:        "btn-dantooine-skratta",
                    sorgligt:       "btn-dantooine-sorgligt",
                    spoken:         "btn-dantooine-spoken",
                    tankar:         "btn-dantooine-tankar"                    
                },
            };
            
        return [{
                catid: 3,           
                imgbgClass: classeslist.imgbgClass.karlek2,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.berattelse,
                catIconBGClass: classeslist.catIconBG.berattelse
            },
            {
                catid: 0,           
                imgbgClass: classeslist.imgbgClass.dikt,
                rubfontClass: classeslist.rubfontClass.cartoon,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.dikt,
                catIconBGClass: classeslist.catIconBG.dikt
            },
            {
                catid: 4,           
                imgbgClass: classeslist.imgbgClass.dikt,
                rubfontClass: classeslist.rubfontClass.cartoon,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.dikt,
                catIconBGClass: classeslist.catIconBG.dikt
            },
            {
                catid: 5,           
                imgbgClass: classeslist.imgbgClass.tankar,
                rubfontClass: classeslist.rubfontClass.cartoon,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.tankar,
                catIconBGClass: classeslist.catIconBG.tankar
            },
            {
                catid: 6,           
                imgbgClass: classeslist.imgbgClass.ovrigt,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.ovrigt,
                catIconBGClass: classeslist.catIconBG.ovrigt
            },
            {
                catid: 8,           
                imgbgClass: classeslist.imgbgClass.deckare,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.deckare,
                catIconBGClass: classeslist.catIconBG.deckare
            },
            {
                catid: 9,           
                imgbgClass: classeslist.imgbgClass.djur,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.djur,
                catIconBGClass: classeslist.catIconBG.djur
            },
            {
                catid: 10,           
                imgbgClass: classeslist.imgbgClass.fantasy,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.fantasy,
                catIconBGClass: classeslist.catIconBG.fantasy
            },
            {
                catid: 11,           
                imgbgClass: classeslist.imgbgClass.skrack,
                rubfontClass: classeslist.rubfontClass.cartoon,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.skrack,
                catIconBGClass: classeslist.catIconBG.skrack2
            },
            {
                catid: 12,           
                imgbgClass: classeslist.imgbgClass.karlek,
                rubfontClass: classeslist.rubfontClass.love,
                rubColorClass: classeslist.rubColorClass.red,
                catIconClass: classeslist.catIconClass.karlek,
                catIconBGClass: classeslist.catIconBG.karlek
            },
            {
                catid: 13,           
                imgbgClass: classeslist.imgbgClass.ramsa,
                rubfontClass: classeslist.rubfontClass.cartoon,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.ramsa,
                catIconBGClass: classeslist.catIconBG.ramsa
            },
            {
                catid: 15,           
                imgbgClass: classeslist.imgbgClass.sorgligt,
                rubfontClass: classeslist.rubfontClass.cartoon,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.sorgligt,
                catIconBGClass: classeslist.catIconBG.sorgligt
            },
            {
                catid: 16,           
                imgbgClass: classeslist.imgbgClass.skratta,
                rubfontClass: classeslist.rubfontClass.cartoon,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.skratta,
                catIconBGClass: classeslist.catIconBG.skratta
            },
            {
                catid: 17,           
                imgbgClass: classeslist.imgbgClass.spanning,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.spanning,
                catIconBGClass: classeslist.catIconBG.spanning
            },
            {
                catid: 18,           
                imgbgClass: classeslist.imgbgClass.spoken,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.spoken,
                catIconBGClass: classeslist.catIconBG.spoken
            },
            {
                catid: 19,           
                imgbgClass: classeslist.imgbgClass.spoken,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.spoken,
                catIconBGClass: classeslist.catIconBG.berattelse
            },
            {
                catid: 21,           
                imgbgClass: classeslist.imgbgClass.hastar,
                rubfontClass: classeslist.rubfontClass.aventure,
                rubColorClass: classeslist.rubColorClass.black,
                catIconClass: classeslist.catIconClass.hastar,
                catIconBGClass: classeslist.catIconBG.hastar
            },
        ]
        
    }
}
import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mediaexempel',
  templateUrl: './mediaexempel.component.html',
  styleUrls: ['./mediaexempel.component.scss']
})
export class MediaexempelComponent implements OnInit {

  @Input() public MediaExempelblock;
  videoUrl:any;
testurl:any ;

  constructor(private _sanitizer: DomSanitizer) {

    this.updateVideoUrl("https://www.youtube.com/embed/wfWxdh-_k_4");

  }

  ngOnInit(): void {

  }

  mediahandler(MediaObj){
    let rettext = "";
    console.log("MediaObj.MediaTyp: "+MediaObj.MediaTyp)
    switch (MediaObj.MediaTyp) {
        case "1":
            rettext = '<img src="' + MediaObj.MediaUrl + '" />';
            break;
        case "2":
          let urltoMovie="";
            if (isNaN(MediaObj.MediaUrl)) {
                urltoMovie = "https://www.youtube.com/embed/" + MediaObj.MediaUrl;
            } else {
               urltoMovie = "https://player.vimeo.com/video/" + MediaObj.MediaUrl;
            };
            this.updateVideoUrl(urltoMovie)
            rettext = '<iframe width="auto" height="auto" src="' + urltoMovie + '" frameborder="0" allowfullscreen="true" style="max-width:100%;"></iframe>';

            break;
        case "3":
            rettext = '<audio preload id="audio1" src="' + MediaObj.MediaUrl + '" controls="controls">Your browser does not support HTML5 Audio!</audio>'
            break;
    }
    console.log("rettext: "+ rettext)
    return this._sanitizer.bypassSecurityTrustHtml(rettext);
  }



  updateVideoUrl(url) {
    // Appending an ID to a vimeo/YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    // this.dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    // return this._sanitizer.bypassSecurityTrustResourceUrl(url)

    this.testurl =  url;
  this.videoUrl =
      this._sanitizer.bypassSecurityTrustResourceUrl(this.testurl);
  }

}

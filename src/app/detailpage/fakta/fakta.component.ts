import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fakta',
  templateUrl: './fakta.component.html',
  styleUrls: ['./fakta.component.scss']
})
export class FaktaComponent implements OnInit {

  @Input() public faktablock;

  fakta:any=[];
  lokal:any=[];
  publik:any=[];
  ekonomi:any=[];
  ovrigt:any=[];

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    if(this.faktablock){
      this.sortfaktagupper(this.faktablock);
    }
  }

  sortfaktagupper(faktajson:any){
    faktajson.forEach(faktatyp => {

      switch (faktatyp.FaktaTypID) {
        // FAKTA 1
        case 1: case 2: case 3: case 4: case 5: case 25: case 26: case 35: case 43: case 44: case 45: case 46:
          this.fakta.push({
              "Faktaid": "1",
              "FaktaTypID": faktatyp.FaktaTypID,
              "Faktarubrik": faktatyp.Faktarubrik,
              "FaktaValue": faktatyp.FaktaValue
          });
          break;

        // LOKAL 2
        case 10: case 11: case 12: case 13: case 14: case 15: case 16: case 17: case 18: case 27: case 28:
          this.lokal.push({
            "Faktaid": "2",
            "FaktaTypID": faktatyp.FaktaTypID,
            "Faktarubrik": faktatyp.Faktarubrik,
            "FaktaValue": faktatyp.FaktaValue
          });
          break;

        // PUBLIK 3
        case 6: case 7: case 8: case 9:  case 36:

          if (faktatyp.FaktaTypID == 7 || faktatyp.FaktaTypID == 8) {
            faktatyp.FaktaValue = faktatyp.FaktaValue + " år"
          };

          this.publik.push({
              "Faktaid": "3",
              "FaktaTypID": faktatyp.FaktaTypID,
              "Faktarubrik": faktatyp.Faktarubrik,
              "FaktaValue": faktatyp.FaktaValue
          });
          break;

        // EKONOMI 4
        case 19: case 20: case 21: case 22: case 23: case 24: case 29: case 30: case 31: case 32: case 34:
          this.ekonomi.push({
            "Faktaid": "4",
            "FaktaTypID": faktatyp.FaktaTypID,
            "Faktarubrik": faktatyp.Faktarubrik,
            "FaktaValue": faktatyp.FaktaValue
          });
          break;

        // ÖVRIGT 5
        case 33:
          this.ovrigt.push({
            "Faktaid": "5",
            "FaktaTypID": faktatyp.FaktaTypID,
            "Faktarubrik": faktatyp.Faktarubrik,
            "FaktaValue": faktatyp.FaktaValue
          });

        // Fakta för konsulenten enbart
        case 37: case 38: case 39: case 40: case 41: case 42:
            break;
        // default är ÖVRIGT
        default:
          this.ovrigt.push({
            "Faktaid": "5",
            "FaktaTypID": faktatyp.FaktaTypID,
            "Faktarubrik": faktatyp.Faktarubrik,
            "FaktaValue": faktatyp.FaktaValue
          });
        };

    });

  }

}

import { categoryStyles } from './models/categoryStyles';
import { Global } from './models/global';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { DetailpageComponent } from './detailpage/detailpage/detailpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
// import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DetailpageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule    
  ],
  providers: [
    Global,
    categoryStyles,
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { ScrollToTopComponent } from './shared/scroll-to-top/scroll-to-top.component';
import { categoryStyles } from './core/models/categoryStyles';
import { Global } from './core/models/global';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { DetailpageComponent } from './detailpage/detailpage/detailpage.component';
import { HttpClientModule } from '@angular/common/http';
import { HashLocationStrategy, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxBootstrapSliderModule } from 'ngx-bootstrap-slider';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { FormsModule } from '@angular/forms';
import { CustomFilterPipe } from './core/pipes/custom-filter.pipe';
import { PageCountPipe } from './core/pipes/page-count.pipe';
import { KatalogenMainComponent } from './katalogen-main/katalogen-main.component';
import { UnescapePipe } from './core/pipes/unescape.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { FaktaComponent } from './detailpage/fakta/fakta.component';
import { KontaktComponent } from './detailpage/kontakt/kontakt.component';
import { MediaexempelComponent } from './detailpage/mediaexempel/mediaexempel.component';
import { HeaderComponent } from './shared/header/header.component';


// import { AutocompleteLibModule } from 'angular-ng-autocomplete';

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    DetailpageComponent,
    CustomFilterPipe,
    PageCountPipe,
    ScrollToTopComponent,
    KatalogenMainComponent,
    UnescapePipe,
    FooterComponent,
    FaktaComponent,
    KontaktComponent,
    MediaexempelComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule ,
    NgxPaginationModule,
    NgxBootstrapSliderModule,
    AutocompleteLibModule,
    FormsModule
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

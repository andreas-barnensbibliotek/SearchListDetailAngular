import { KatalogenMainComponent } from './katalogen-main/katalogen-main.component';
import { MainpageComponent } from './mainpage/mainpage/mainpage.component';
import { DetailpageComponent } from './detailpage/detailpage/detailpage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes,ExtraOptions } from '@angular/router';

const routerOptions: ExtraOptions = {
  enableTracing: true,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [

{ path: 'Arrangemang/id/:id',component: DetailpageComponent },
{ path: '', component: KatalogenMainComponent },
{ path: '**',  component: KatalogenMainComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

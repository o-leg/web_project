import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {RegPageComponent} from "./reg-page/reg-page.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {MainPageComponent} from "./main-page/main-page.component";
import {TicketPageComponent} from "./ticket-page/ticket-page.component";
import {UserTicketPageComponent} from "./user-ticket-page/user-ticket-page.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'reg', component: RegPageComponent},
  {path: 'user', component: UserPageComponent},
  {path: 'tickets', component: TicketPageComponent},
  {path: 'my_tickets', component: UserTicketPageComponent}
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

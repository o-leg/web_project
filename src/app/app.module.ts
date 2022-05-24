import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterTestingModule} from "@angular/router/testing";
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegPageComponent } from './reg-page/reg-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { MainPageComponent } from './main-page/main-page.component';
import { TicketPageComponent } from './ticket-page/ticket-page.component';
import { UserTicketPageComponent } from './user-ticket-page/user-ticket-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LoginPageComponent,
    RegPageComponent,
    UserPageComponent,
    MainPageComponent,
    TicketPageComponent,
    UserTicketPageComponent
  ],
  imports: [
    BrowserModule,
    RouterTestingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

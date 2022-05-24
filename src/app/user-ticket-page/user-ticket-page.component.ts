import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "../services/cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-ticket-page',
  templateUrl: './user-ticket-page.component.html',
  styleUrls: ['./user-ticket-page.component.scss']
})
export class UserTicketPageComponent implements OnInit {
  readonly API: string = 'http://127.0.0.1:5000';
  private authToken: string = '';
  isTickets:boolean = false;

  usersTicketsInfo:[{
    ticket_id:number,
    price:number,
    event_name:string,
    event_date:string

  }] = [] as any;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.authToken = this.cookie.getAuthToken();
    this.http.get<[{
      ticket_id: number,
      price: number,
      event_name:string,
      event_date:string
    }]>(this.API + "/ticket/bought",{
      headers: { "Authorization": "Bearer " + this.authToken}
    }).subscribe({
      next: (data)=>{
        data.forEach((ticket)=>
          this.usersTicketsInfo.push(ticket))
        if(this.usersTicketsInfo.length > 0){
          this.isTickets = true;
        }
      }
    })
  }

}

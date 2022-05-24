import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "../services/cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ticket-page',
  templateUrl: './ticket-page.component.html',
  styleUrls: ['./ticket-page.component.scss']
})
export class TicketPageComponent implements OnInit {
  readonly API: string = 'http://127.0.0.1:5000';
  private authToken: string = '';
  isTickets:boolean = false;

  event: {
    id: number,
    name: string,
    description: string,
    location: string,
    date: string,
    image: string
  } = {} as any;

  tickets: [{
    id: number,
    price: number,
    status: boolean
  }] = [] as any;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) {
    this.event = this.router.getCurrentNavigation()?.extras.state as any;
  }


  ngOnInit(): void {
    this.authToken = this.cookie.getAuthToken();
    this.http.get<[{
      id: number,
      price: number,
      status: boolean
    }]>(this.API + "/ticket/" + this.event.id).subscribe({
      next: (data) => {
        data.forEach((ticket)=>
          this.tickets.push(ticket))
        if(this.tickets.length > 0){
          this.isTickets = true;
        }
      }
    })
  }

  buyTicket(ticketID: number, event: Event){
    const btn = event.target as HTMLElement;

    this.http.put(this.API+'/ticket/buy/'+ticketID,null,{
      headers: { "Authorization": "Bearer " + this.authToken}
    }).subscribe({
      next: ()=>{
        btn.textContent = 'BOUGHT';
        btn.classList.add('disable-btn');
      }
    })
  }

}

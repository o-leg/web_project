import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CookieService} from "../services/cookie.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  readonly API: string = 'http://127.0.0.1:5000';

  events: [{
    id: number,
    name: string,
    description: string,
    location: string,
    date: string,
    image: string
  }] = [] as any;

  constructor(
    private http: HttpClient,
    private cookie: CookieService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.http.get<[{
      id: number,
      name: string,
      description: string,
      location: string,
      date: string,
      image: string
    }]>
    (this.API + "/event").subscribe({
      next: (data) => {
        data.forEach((event) => {
          this.events.push(event);
        })
      }
    })
  }

  relocateToTicket(event: {}): void {
    if (!this.cookie.getAuthToken()) {
      alert("You should be logged")
      return
    }
    this.router.navigate(['/tickets'], {state: event})
  }

}

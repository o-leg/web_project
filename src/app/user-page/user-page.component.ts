import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {CookieService} from "../services/cookie.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Emitters} from "../services/emitters";

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {
  readonly API: string = 'http://127.0.0.1:5000';
  private authToken: string = '';
  form: FormGroup = {} as FormGroup;

  user: {
    nickname: string,
    name: string,
    surname: string,
    email: string
  } = JSON.parse(this.cookie.getCookie('user'));

  constructor(
    private cookie: CookieService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nickname: this.user.nickname,
      name: this.user.name,
      surname: this.user.surname,
      email: this.user.email
    })

    this.checkAuth();

  }

  checkAuth(){
    if(this.cookie.getAuthToken()){
      Emitters.authEmitter.emit(true);
    }else {
      Emitters.authEmitter.emit(false);
    }
  }

  submit(): void {
    this.authToken = this.cookie.getAuthToken();
    if(!this.validate(this.form.getRawValue())){
      return;
    }
    this.http.put(this.API + '/user/update', this.form.getRawValue(), {
      headers: {"Authorization": "Bearer " + this.authToken}
    }).subscribe({
      next: () => {
        this.user = this.form.getRawValue();
        this.cookie.setCookie('user', JSON.stringify(this.user), 60);
        this.router.navigate(['/user']);
      },
      error: (err => {
        if (err.status === 403) {
          alert('Try again!');
        }
      })
    });
  }

  validate(user: { nickname: string, name: string, surname: string, email: string }) {
    const validateEmail = (email: string) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };

    let status = true

    if (!validateEmail(user.email)) {
      alert('Email is already used');
      status = false;
    }

    if (user.nickname === '') {
      alert('Incorrect nickname')
      status = false;
    }

    if (user.name === '') {
      alert('Write your name');
      status = false;
    }

    if (user.surname === '') {
      alert('Write your surname');
      status = false;
    }

    return status;
  }

  relocateToMyTicket(): void {
    if (!this.cookie.getAuthToken()) {
      alert("You should be logged")
      return
    }
    this.router.navigate(['/my_tickets'])
  }
}

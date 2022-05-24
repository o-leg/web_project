import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTicketPageComponent } from './user-ticket-page.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('UserTicketPageComponent', () => {
  let component: UserTicketPageComponent;
  let fixture: ComponentFixture<UserTicketPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTicketPageComponent],
      imports: [HttpClientTestingModule, HttpClientTestingModule, RouterTestingModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTicketPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

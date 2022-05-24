import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegPageComponent } from './reg-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NO_ERRORS_SCHEMA} from "@angular/core";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {RouterTestingModule} from "@angular/router/testing";

describe('RegPageComponent', () => {
  let component: RegPageComponent;
  let fixture: ComponentFixture<RegPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegPageComponent ],
      imports: [ReactiveFormsModule, HttpClientTestingModule, RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

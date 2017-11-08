import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  slider = '';

  constructor(
    private _location: Location,
    private router: Router
  ) {}

  ngOnInit() {
  }

  public back() {
    this.slider = 'slider-right';
    this._location.back();
  }
  public redirect(path) {
    this.slider = 'slider-left';
    this.router.navigate(['./SomewhereElse']);
  }
}

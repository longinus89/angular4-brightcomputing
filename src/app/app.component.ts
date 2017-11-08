import { Component, OnInit } from '@angular/core';
import { routerTransition } from './router.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [ routerTransition ]
})
export class AppComponent implements OnInit {
  constructor (
  ) {}

  ngOnInit() {
  }

  /* getState(outlet) {
    console.log(outlet.activatedRouteData.state);
    return outlet.activatedRouteData.state;
  } */
}

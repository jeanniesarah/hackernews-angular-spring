import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">

      <h1 class="title">Home page works!</h1>

    </div>
    </div>
    </section>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

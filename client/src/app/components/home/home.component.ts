import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container is-fluid">
    <section class="hero is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="large-title">we build futures</h1>
        <h1 class="large-title">not just tech</h1>
    </div>
    </div>
    </section>
    </div>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

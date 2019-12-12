import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="large-title">Home page works!</h1>
    </div>
    </div>
    </section>
  `,
  styles:  [`
        .large-title{
        font-size: 3.35rem;
        font-weight: 800;
        color: #1a1a1a;
        line-height: 1.30;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

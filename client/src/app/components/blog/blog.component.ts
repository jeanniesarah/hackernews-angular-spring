import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
      <section class="hero is-warning is-fullheight is-bold">
          <div class="hero-body">
              <div class="container">
                  <h1 class="title">Blog page works!</h1>
              </div>
          </div>
      </section>
  `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

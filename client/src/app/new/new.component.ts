import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  template: `
    <body>
      <section class="hero is-fullheight is-bold">
          <div class="hero-body">
              <div class="container">
                  <h1 class="large-title">new page works</h1>
              </div>
          </div>
      </section>
    </body>
  `,
  styles: []
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

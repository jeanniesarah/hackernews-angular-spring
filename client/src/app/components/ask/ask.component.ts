import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ask',
  template: `
    <body>
      <section class="hero is-fullheight is-bold">
          <div class="hero-body">
              <div class="container">
                  <h1 class="large-title">ask page works</h1>
              </div>
          </div>
      </section>
    </body>
  `,
  styles: []
})
export class AskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

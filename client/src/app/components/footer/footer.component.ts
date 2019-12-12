import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
      <nav class="navbar is-fixed-bottom">
          <!-- menu -->
          <div class="navbar-start">
              <a class="navbar-item" routerLink="blog">Blog</a>
          </div>
      </nav>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

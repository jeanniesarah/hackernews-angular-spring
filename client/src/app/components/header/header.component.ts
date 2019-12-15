import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <div id="wrapper">
         <!-- logo + menu -->
          <div class="navbar">
              <a class="navbar-item" routerLink="">
                  <img src="assets/img/angular-logo.png">
              </a>
              <div class="navbar">
                  <a class="navbar-item" routerLink="new">new</a>
                  <a class="navbar-item" routerLink="ask">ask</a>
                  <a class="navbar-item" routerLink="blog">blog</a>
              </div>
              <div class="navbar-end">
                  <a class="navbar-item" routerLink="login">login</a>
              </div>
          </div>
    </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `  
    <!-- fixed menu -->
      <nav class="navbar is-fixed-top">
          <!-- logo -->
          <div class="navbar-brand">
              <a class="navbar-item" routerLink="">
                  <img src="assets/img/angular-logo.png">
              </a>
          </div>

          <!-- left menu -->
          <div class="navbar-menu">
              <div class="navbar">
                  <a class="navbar-item" routerLink="new">new</a>
                  <a class="navbar-item" routerLink="ask">ask</a>
                  <a class="navbar-item" routerLink="blog">blog</a>
              </div>
          </div>

          <!-- right menu -->
          <div class="navbar-menu">
              <div class="navbar-end">
                  <a class="navbar-item" routerLink="login">login</a>
              </div>
          </div>
      </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

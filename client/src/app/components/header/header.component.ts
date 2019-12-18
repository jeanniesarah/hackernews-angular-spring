import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div id="wrapper">
        <!-- logo + menu -->
        <div class="navbar">
          <a class="navbar-item" routerLink="/news/1">
            <img src="assets/img/angular-logo.png">
          </a>
          <div class="navbar">
            <a class="navbar-item" routerLink="/newest/1">new</a>
            <a class="navbar-item" routerLink="/ask/1">ask</a>
            <a class="navbar-item" routerLink="submit">submit</a>
          </div>
          <div class="navbar-end">
            <a class="navbar-item" routerLink="join-us">join us</a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

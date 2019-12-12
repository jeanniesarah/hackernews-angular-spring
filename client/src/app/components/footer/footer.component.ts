import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  template: `
      <nav class="navbar is-fixed-bottom">
          <!-- menu -->
          <div class="navbar-start">
              <a href="https://twitter.com"><img src="assets/img/twitter.svg" width="25px" height="25px" alt="@"></a>
              <a href="https://www.instagram.com"><img src="assets/img/instagram.svg" width="25px" height="25px" alt="@"></a>
              <a href="mailto:"><img src="assets/img/email.svg" width="25px" height="25px" alt="@"></a>
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

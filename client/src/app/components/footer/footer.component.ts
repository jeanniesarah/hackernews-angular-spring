import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-footer',
  template: `
    <div id="footer">
      <p>Show this project some ❤ on
              <a href="https://twitter.com"><img src="assets/img/twitter-red.svg" width="25px" height="25px" alt="@"></a>
              <a href="https://www.instagram.com"><img src="assets/img/instagram-red.svg" width="25px" height="25px" alt="@"></a>
        <a href="mailto:"><img src="assets/img/email-red.svg" width="25px" height="25px" alt="@"></a>
      </p>
    </div>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

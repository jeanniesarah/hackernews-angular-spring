import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <app-header></app-header>

    <app-footer></app-footer>
    `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

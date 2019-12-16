import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <app-stories></app-stories>
    `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

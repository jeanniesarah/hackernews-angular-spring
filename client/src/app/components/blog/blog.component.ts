import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <div id="wrapper">
      <app-stories></app-stories>
    </div>
    `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

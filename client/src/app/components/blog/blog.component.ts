import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
      <div id="wrapper">
          <table class="table">
              <tr>
                  <td>1.</td>
                  <td>Test 2</td>
                  <td>Test 3</td>
                  <td>Test 4</td>
                  <td>Test 5</td>
              </tr>
              <tr>
                  <td>2.</td>
                  <td>Test 2</td>
                  <td>Test 3</td>
                  <td>Test 4</td>
                  <td>Test 5</td>
              </tr>
              <tr>
                  <td>3.</td>
                  <td>Test 2</td>
                  <td>Test 3</td>
                  <td>Test 4</td>
                  <td>Test 5</td>
              </tr>
          </table>
      </div>

      
      
    `,
  styles: []
})
export class BlogComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

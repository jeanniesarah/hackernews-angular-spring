import {Component, Input, OnInit} from '@angular/core';
import {NewsApiService} from "../news-api.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit() {

  }
}

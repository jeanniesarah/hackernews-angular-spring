import {Component, Input, OnInit} from '@angular/core';
import {NewsApiService} from "../../news-api.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemID: number;
  item;

  constructor(private newsAPIService: NewsApiService) {}

  ngOnInit() {
    this.newsAPIService.fetchItem(this.itemID).subscribe(data => {
      this.item = data;
    }, error => console.log('Could not load item' + this.itemID));
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NewsApiService } from "../../news-api.service";

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  items;

  constructor(private newsApiService: NewsApiService) {}

  ngOnInit() {
    this.newsApiService.fetchStories()
      .subscribe(
        items => this.items = items,
        error => console.log('Error fetching stories'));
  }

}

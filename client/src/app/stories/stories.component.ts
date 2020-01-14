import { Component, OnInit } from '@angular/core';
import { NewsApiService } from "../news-api.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  typeSub: any;
  pageSub: any;
  items;
  storiesType;
  pageNum: number;
  listStart: number;

  constructor(
    private newsApiService: NewsApiService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.typeSub = this.route
      .data
      .subscribe(data => this.storiesType = (data as any).storiesType);

    this.pageSub = this.route.params.subscribe(params => {
      this.pageNum = +params['page'] ? +params['page'] : 1;
      this.newsApiService.fetchStories(this.storiesType, this.pageNum)
        .subscribe(
          items => this.items = items,
          error => console.log('Error fetching' + this.storiesType + 'stories'),
          () => {
            this.listStart = ((this.pageNum - 1) * 30) + 1;
            window.scrollTo(0, 0);
          });
    });
  }
}

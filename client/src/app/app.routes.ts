import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent} from "./stories/stories.component";
import { ItemCommentsComponent } from "./item-comments/item-comments.component";
import {SubmitComponent} from "./submit/submit.component";
import {LoginComponent} from "./login/login.component";
import {JoinComponent} from "./join/join.component";

const routes: Routes = [
  {path: '', redirectTo: 'news/1', pathMatch : 'full'},
  {path: 'news/:page', component: StoriesComponent, data: {storiesType: 'news'}},
  {path: 'newest/:page', component: StoriesComponent, data: {storiesType: 'newest'}},
  {path: 'ask/:page', component: StoriesComponent, data: {storiesType: 'ask'}},
  {path: 'item/:id', component: ItemCommentsComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'login', component: LoginComponent},
  {path: 'join-us', component: JoinComponent},
  //{path: 'show/:page', component: StoriesComponent, data: {storiesType: 'show'}},
  //{path: 'jobs/:page', component: StoriesComponent, data: {storiesType: 'jobs'}},
];

export const routing = RouterModule.forRoot(routes);

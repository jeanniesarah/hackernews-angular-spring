import { Routes, RouterModule } from '@angular/router';

import { StoriesComponent} from "./components/stories/stories.component";
import { ItemCommentsComponent } from "./components/item-comments/item-comments.component";
import {SubmitComponent} from "./components/submit/submit.component";
import {LoginComponent} from "./components/login/login.component";
import {JoinComponent} from "./components/join/join.component";

const routes: Routes = [
  {path: '', redirectTo: 'news/1', pathMatch : 'full'},
  {path: 'news/:page', component: StoriesComponent, data: {storiesType: 'news'}},
  {path: 'newest/:page', component: StoriesComponent, data: {storiesType: 'newest'}},
  //{path: 'show/:page', component: StoriesComponent, data: {storiesType: 'show'}},
  {path: 'ask/:page', component: StoriesComponent, data: {storiesType: 'ask'}},
  //{path: 'jobs/:page', component: StoriesComponent, data: {storiesType: 'jobs'}},
  {path: 'item/:id', component: ItemCommentsComponent},
  {path: 'submit', component: SubmitComponent},
  {path: 'login', component: LoginComponent},
  {path: 'join-us', component: JoinComponent},
];

export const routing = RouterModule.forRoot(routes);
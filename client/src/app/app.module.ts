import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { routing } from "./app.routes";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SubmitComponent } from './submit/submit.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from "@angular/forms";
import { ForgotComponent } from './forgot/forgot.component';
import { AskComponent } from './ask/ask.component';
import { NewComponent } from './new/new.component';
import { StoriesComponent } from './stories/stories.component';
import { ItemComponent } from './item/item.component';
import { NewsApiService } from "./news-api.service";
import { ItemCommentsComponent } from './item-comments/item-comments.component';
import { JoinComponent } from './join/join.component';
import { CommentTreeComponent } from './comment-tree/comment-tree.component';
import { CommentComponent } from './comment/comment.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SubmitComponent,
    LoginComponent,
    ForgotComponent,
    AskComponent,
    NewComponent,
    StoriesComponent,
    ItemComponent,
    ItemCommentsComponent,
    JoinComponent,
    CommentTreeComponent,
    CommentComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

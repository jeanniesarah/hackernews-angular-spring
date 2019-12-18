import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
//import { AppRoutingModule } from './app-routing.module';
import { routing } from "./app.routes";
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { SubmitComponent } from './components/submit/submit.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import { ForgotComponent } from './components/forgot/forgot.component';
import { AskComponent } from './components/ask/ask.component';
import { NewComponent } from './components/new/new.component';
import { StoriesComponent } from './components/stories/stories.component';
import { ItemComponent } from './components/item/item.component';
import { NewsApiService } from "./news-api.service";
import { ItemCommentsComponent } from './components/item-comments/item-comments.component';
import { JoinComponent } from './components/join/join.component';
import { CommentTreeComponent } from './components/comment-tree/comment-tree.component';
import { CommentComponent } from './components/comment/comment.component';

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
  ],
  imports: [
    BrowserModule,
    //RoutingModule
    routing,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    FormsModule,
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

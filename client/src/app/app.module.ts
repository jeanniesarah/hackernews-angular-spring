import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from "@angular/forms";
import { ForgotComponent } from './components/forgot/forgot.component';
import { AskComponent } from './components/ask/ask.component';
import { NewComponent } from './components/new/new.component';
import { StoriesComponent } from './components/stories/stories.component';
import { ItemComponent } from './components/item/item.component';
import { NewsApiService } from "./news-api.service";
import { MomentModule } from 'ngx-moment';
import { DomainPipe } from './domain.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    LoginComponent,
    ForgotComponent,
    AskComponent,
    NewComponent,
    StoriesComponent,
    ItemComponent,
    DomainPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FontAwesomeModule,
    FormsModule,
    MomentModule,
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

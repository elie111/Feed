import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FeedHomeComponent } from './components/feed-home/feed-home.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(
      routes, { enableTracing: true }  // <-- debugging purposes only
    )
  ],
  declarations: [
    PostComponent,
    AppComponent,
    LoginComponent,
    FeedHomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
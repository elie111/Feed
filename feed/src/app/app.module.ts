import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { FeedHomeComponent } from './feed-home/feed-home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(
      routes, { enableTracing: true }  // <-- debugging purposes only
    )
  ],
  declarations: [
    AppComponent, LoginComponent, FeedHomeComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
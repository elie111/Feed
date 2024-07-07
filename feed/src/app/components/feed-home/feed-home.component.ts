import { Component } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-feed-home',
  templateUrl: './feed-home.component.html',
  styleUrl: './feed-home.component.sass'
})
export class FeedHomeComponent {
  posts: Array<Post> = [];
  userId: string = '';

  constructor() {
    this.userId = localStorage.getItem("userId") as string;
  }
}

import { Component } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-feed-home',
  templateUrl: './feed-home.component.html',
  styleUrl: './feed-home.component.sass'
})
export class FeedHomeComponent {
  posts: Array<Post> = [new Post('test', 'test', 'test'), new Post('test2', 'teset2', 'test3'), new Post()];
  userId: string = '';

  constructor() {
    this.userId = localStorage.getItem("userId") as string;
  }
}

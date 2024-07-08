import { Component, Input, input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.sass'
})
export class PostComponent {
  @Input() postData: Post;

}

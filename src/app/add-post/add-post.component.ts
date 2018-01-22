import { Component, Output, EventEmitter } from '@angular/core';

import { Post } from '../post.model';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {

  @Output() childPosts = new EventEmitter();

  show: boolean = false;

  displayForm() {
    this.show = !this.show;
  }

  submitPost(content, title){
    const newPost: Post = new Post(title, content, false);
    this.childPosts.emit(newPost);
    this.displayForm();
  }

}

import { Component } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  posts: Post[] = [
    new Post("Post 1", "These are the contents of Post 1.", false),
    new Post("Post 2", "These are the contents of Post 2.", false),
    new Post("Post 3", "These are the contents of Post 3.", false)
  ];

  selectedPost: Post = this.posts[0];

  hidden: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  show(clickedPost) {
    clickedPost.showContent = !clickedPost.showContent;
  }

  addPost(item) {
    this.posts.push(item);
  }

  editPost(post){
    this.selectedPost = post;
    this.hidden = true;
  }

  deletePost(post){
    const updatePosts = this.posts.filter(function(val, index){
      return post !== val; // this will create an array of elements that pass the condition
      //e.g post 1 !== post 3 will return true
      //e.g post 3 !== post 3 will return false and post 3 will not be included in the array
    });
    console.log(updatePosts);
    this.posts = updatePosts;
  }

}

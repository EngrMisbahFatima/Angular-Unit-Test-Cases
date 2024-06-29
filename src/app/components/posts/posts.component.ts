import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Post';
import { PostService } from 'src/app/services/post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit{
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(){
    this.getPosts();
  }

  getPosts(){
      this.postService.getPosts().subscribe(
        (res) => {
          this.posts = res;
        }
      );
  }

  deletePost(post: Post){
    this.posts = this.posts.filter( p => p.id !== post.id);
    this.postService.deletePost(post).subscribe();
  }
}

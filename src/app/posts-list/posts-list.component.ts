import { Component, OnInit } from '@angular/core';
import {Post} from "../post";
import {PostService} from "../post.service";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  loading: boolean = true;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.postService.getPosts().subscribe(
      (response) => {
        console.log('response received');
        this.posts = response;
      },
      (error) => {
        console.error('Request failed with error');
        this.loading = false;
      },
      () => {
        console.log('Request completed'); //This is actually not needed
        this.loading = false;
        console.log(this.posts);
      })
  }
}

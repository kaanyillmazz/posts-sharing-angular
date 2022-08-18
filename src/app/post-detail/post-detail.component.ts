import { Component, OnInit, Input } from '@angular/core';
import {Post} from "../post";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {PostService} from "../post.service";
import {Comment} from "../comment";



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post?: Post;
  comments?: Comment[];
  constructor( private route: ActivatedRoute,
               private postService: PostService,
               private location: Location) { }

  ngOnInit(): void {
  this.getPost();
  this.getComments();
  }

  getPost(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getPost(id).subscribe(post => this.post = post);
  }
  getComments(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postService.getComments(id).subscribe(comments => this.comments = comments);
}



}

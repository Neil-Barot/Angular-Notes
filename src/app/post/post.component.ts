import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from '../services/post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent, NgFor],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  posts: Array<any>;
  
  constructor(private postService: PostService) {
    //let postService = new PostService()

    this.posts = postService.postList;
  }
 
  ngOnInit(): void {
    
  }

}

import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  providers: [PostService]
})
export class PostListComponent implements OnInit{
  postList: Array<any>

  constructor(private postService: PostService) {
    this.postList = postService.postList
  }

  ngOnInit(): void {
    
  }
}

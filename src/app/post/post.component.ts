import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostListComponent } from './post-list/post-list.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [PostListComponent],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit{
  
  title:string = "Posts";
  postParentMessage:string = "Post to PostList";

  childMessage:string = 'From Child Component';
  outputChildMessage:string = 'Message from Child Component Via Output'

  @Input() fromParent:string;

  @Output() messageEvent = new EventEmitter<string>();
  
  constructor() {}
 
  ngOnInit(): void {
    
  }

  sendMessage(){
    this.messageEvent.emit(this.outputChildMessage)
  }
}

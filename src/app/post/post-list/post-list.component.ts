import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  title:string = 'Post Lists';

  @Input() fromParent:string;
}

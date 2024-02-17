import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PostComponent, FormsModule, NgFor, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "world";
  postArray: Array<string> = ['Post 1', 'Post 2', 'Post 3', 'Post 4', 'Post 5'];

  objArray: Array<any> = [
    { id: 1, postTitle: 'Post 1' },
    { id: 2, postTitle: 'Post 2' },
    { id: 3, postTitle: 'Post 3' },
    { id: 4, postTitle: 'Post 4' },
    { id: 5, postTitle: 'Post 5' }
  ]

  objArrayLen = this.objArray.length;

  constructor(){
    for(let i = 0; i<this.postArray.length; i++){
      console.log(this.postArray[i]);
    }
  }

  addNew() {
    this.objArray.push({id: this.objArrayLen + 1, postTitle: 'Post ' + (this.objArrayLen + 1)});
    this.objArrayLen = this.objArray.length;
  }

  deleteObj() {
    this.objArray.pop();
    this.objArrayLen = this.objArray.length;
  }
}

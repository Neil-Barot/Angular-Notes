import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PostComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /*title = 'World';
  bool:boolean = true;
  usernameSpot:string;
  parentMessage:string = 'Message changed';
  message:string;
  fromChildOutput:string; 
  imgUrl:string = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg';

  @ViewChild(PostComponent) childComp;

  constructor() {
     console.log(this.childComp)
  }

  ngAfterViewInit() {
    console.log(this.childComp)
    this.message = this.childComp.childMessage;
  }

  receiveMessage($event){
    this.fromChildOutput = $event;
  }

  buttonClick() {
    console.log('button click event worked');
  }

  onKeyUp(username) {
    console.log(username)
  }

  onKeyUp2() {
    console.log(this.usernameSpot)
  }*/

  title = 'World';
  postTitle:string = "";
  postDetails:string = "";
  imgUrl:string = "";
  postUrl:string = "";
  background:boolean = false;


}

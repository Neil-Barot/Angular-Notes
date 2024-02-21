import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass} from '@angular/common';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PostComponent, FormsModule, 
    NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "world";

  userName: string;
  userEmail: string;
  userAddress: string;

  userArr: Array<any>;

  constructor(){
    
  }

  onClick() {
    console.log(this.userName);

    this.userArr.push({
      "name": this.userName, 
      "email": this.userEmail, 
      "address": this.userAddress
    });
  }

  deleteObj(index) {
    this.userArr.splice(index,1);
  }
}

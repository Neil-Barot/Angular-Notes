import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { FormControl, FormsModule, NgForm } from '@angular/forms';
import { AppendPipe } from './pipes/append.pipe';
import { AppendCliPipe } from './pipes/append-cli.pipe';
import { SummaryPipe } from './pipes/summary.pipe';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgStyle, NgClass} from '@angular/common';
import { JsonPipe, UpperCasePipe, LowerCasePipe } from '@angular/common';
import test from 'node:test';
import { NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, PostComponent, PostListComponent,
    AppendPipe, AppendCliPipe, SummaryPipe, ReactiveFormsModule,
    FormsModule, UpperCasePipe, LowerCasePipe, NgIf, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "Angular Course";

  dummyText: string = `The Navy Seal copypasta, also sometimes known as Gorilla Warfare due to a misspelling of "guerrilla warfare" in its contents, is an aggressive but humorous attack paragraph supposedly written by an extremely well-trained member of the United States Navy SEALs (hence its name) to an unidentified "kiddo", ostensibly whoever the copypasta is directed to. Written in a manner similar to a non-serious death threat, the copypasta has the author threaten the recipient while boasting of their own increasingly absurd or unfeasible accomplishments, such as having "over 300 confirmed kills" or being able to kill someone "in over seven hundred ways, and thats just with my bare hands". This copypasta is often reposted as a humorous overreaction to an insult and is thought to have originated on the military-themed imageboard OperatorChan, although the earliest known usage of the copypasta was on 4chan on November 11th, 2010.[4]`;

  userDetails = {
    name: "User 1",
    city: "New York",
    country: "US"
  }

  constructor(){
    
  }

  onSubmit(f: NgForm) {
    console.log(f)
  }

  getValue(f: FormControl | NgModel) {
    console.log(f);
  }

}

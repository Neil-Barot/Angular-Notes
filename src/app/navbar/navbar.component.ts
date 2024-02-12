import { Component } from '@angular/core';

// import { NavbarComponent } from './navbar/navbar.component';

@Component({
    selector: 'app-navbar',
    standalone: true,
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    title:string = 'Navbar';
}
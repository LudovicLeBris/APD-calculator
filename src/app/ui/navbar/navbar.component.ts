import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../types/user';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isDarkMode:boolean;
  userInitials: string = '';

  constructor() {
    this.isDarkMode = false;
  }

  ngOnInit(): void {
    const userInfo:AppUser = JSON.parse(localStorage.getItem('userProfil')!);
    const firstLetter = userInfo.firstname.charAt(0).toUpperCase();
    const secondLetter = userInfo.lastname.charAt(0).toUpperCase();
    this.userInitials = firstLetter + secondLetter
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }
}

import { Component, OnInit } from '@angular/core';
import { AppUser } from '../../types/user';
import { CloseButtonComponent } from '../close-button/close-button.component';
import { UserMenuComponent } from '../user-menu/user-menu.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CloseButtonComponent,
    UserMenuComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  isDarkMode:boolean;
  userInitials: string = '';
  isUserMenuOpen: boolean = false;
  userInfo: AppUser;

  constructor() {
    this.isDarkMode = false;
    this.userInfo = JSON.parse(localStorage.getItem('userProfil')!);
  }

  ngOnInit(): void {
    const firstLetter = this.userInfo.firstname.charAt(0).toUpperCase();
    const secondLetter = this.userInfo.lastname.charAt(0).toUpperCase();
    this.userInitials = firstLetter + secondLetter
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }

  toggleUserMenu(): void {
    this.isUserMenuOpen = !this.isUserMenuOpen;
    this.toggleMain();
  }

  closeUserMenu(): void {
    this.isUserMenuOpen = false;
    this.toggleMain();
  }

  private toggleMain(): void {
    if (this.isUserMenuOpen) {
      document.getElementsByTagName('main')[0].classList.add('hidden')
      document.getElementById('backgroundModal')!.classList.remove('hidden');
      document.body.classList.add('overflow-y-hidden');
    } else {
      document.getElementsByTagName('main')[0].classList.remove('hidden')
      document.getElementById('backgroundModal')!.classList.add('hidden');
      document.body.classList.remove('overflow-y-hidden');
    }
  }
}

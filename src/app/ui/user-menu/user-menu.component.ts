import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextButtonComponent } from '../text-button/text-button.component';
import { AppUser } from '../../types/user';
import { AuthService } from '../../shared/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../shared/user.service';

@Component({
  selector: 'app-user-menu',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TextButtonComponent,
  ],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.css'
})
export class UserMenuComponent implements OnInit {
  @Input() userInfo!: AppUser
  @Output('closeUserMenu') closeUserMenu: EventEmitter<any> = new EventEmitter();
  form: FormGroup = new FormGroup({});
  firstname: string = '';
  isFirstnameEnable: boolean = false;
  lastname: string = '';
  isLastnameEnable: boolean = false;
  company: string = '';
  isCompanyEnable: boolean = false;

  constructor (
    private formBuilder: FormBuilder,
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
  ) {
    this.userInfo = JSON.parse(localStorage.getItem('userProfil')!);
    this.firstname = this.userInfo.firstname;
    this.lastname = this.userInfo.lastname;
    this.company = this.userInfo.company;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: [this.firstname],
      lastname: [this.lastname],
      company: [this.company],
    })

    this.form.get('firstname')?.disable();
    this.form.get('lastname')?.disable();
    this.form.get('company')?.disable();
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }

  onsubmit(): void {
    const payload: Partial<AppUser> = {
      firstname: this.form.get('firstname')?.value,
      lastname : this.form.get('lastname')?.value,
      company : this.form.get('company')?.value,
    }

    this.userService.updateUser(payload).subscribe({
      next: (response => {
        this.userInfo = response.content;
        localStorage.setItem('userProfil', JSON.stringify(this.userInfo));
      }),
      error: (error => {
        console.log(error);
      })
    })
  }

  switchEnableFirstname(): void {
    if (this.isFirstnameEnable) {
      this.form.get('firstname')?.disable();
      this.isFirstnameEnable = false;
    } else {
      this.form.get('firstname')?.enable();
      this.isFirstnameEnable = true;
    }
  }

  switchEnableLastname(): void {
    if (this.isLastnameEnable) {
      this.form.get('lastname')?.disable();
      this.isLastnameEnable = false;
    } else {
      this.form.get('lastname')?.enable();
      this.isLastnameEnable = true;
    }
  }

  switchEnableCompany(): void {
    if (this.isCompanyEnable) {
      this.form.get('company')?.disable();
      this.isCompanyEnable = false;
    } else {
      this.form.get('company')?.enable();
      this.isCompanyEnable = true;
    }
  }

  goToUpdatePassword() {
    this.router.navigate(['modification-mot-de-passe']);
    this.closeUserMenu.emit();
  }

}

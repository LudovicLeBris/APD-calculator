import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginPayload } from '../../types/loginPayload';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  email: string = '';
  password: string = '';
  loginSucceed: boolean = false;
  isDarkMode: boolean = false;

  constructor (
    private formBuilder : FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {

  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required]]
    });
    // if (localStorage.getItem('userProfil')) {
    //   this.authService.isLogged = true;
    //   this.loginSucceed = true;
    //   this.router.navigate(['projets']);
    // }
  }

  onSubmit():void {
    this.loginSucceed = false;
    this.email = this.form.get('email')!.value;
    this.password = this.form.get('password')!.value;
    const loginPayload: LoginPayload = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(loginPayload).subscribe((response) => {
      if ('token' in response) {
        localStorage.setItem('jwt', response.token);
        this.authService.getUserProfile().subscribe(
          (response) => {
            this.authService.currentUser = response.content;
            localStorage.setItem('userProfil', JSON.stringify(this.authService.currentUser))
          }
        )
        this.authService.isLogged = true;
        this.loginSucceed = true;
        this.router.navigate(['projets']);
      }
    });

  }

  goToRegister(): void {
    this.router.navigate(['enregistrement']);
  }
}

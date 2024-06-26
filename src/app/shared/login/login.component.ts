import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginPayload } from '../../types/loginPayload';
import { LoaderComponent } from '../../ui/loader/loader.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  email: string = '';
  password: string = '';
  loginSucceed: boolean = false;
  wrongCredentials: boolean = false;
  loginFailed: boolean = false;
  isDarkMode: boolean = false;
  pending:boolean = false;

  constructor (
    private formBuilder : FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }

  ngOnInit(): void {
    document.body.classList.remove('overflow-y-hidden');
    this.form = this.formBuilder.group({
      email: [this.email, [Validators.required, Validators.email]],
      password: [this.password, [Validators.required]]
    });
    if (localStorage.getItem('userProfil')) {
      this.authService.isLogged = true;
      this.loginSucceed = true;
      this.router.navigate(['projets']);
    }
  }

  onSubmit():void {
    this.loginSucceed = false;
    this.pending = true;
    this.email = this.form.get('email')!.value;
    this.password = this.form.get('password')!.value;
    const loginPayload: LoginPayload = {
      email: this.email,
      password: this.password,
    };

    this.authService.login(loginPayload).subscribe({
      next: response => {
        localStorage.setItem('jwt', response.token);
        this.authService.getUserProfile().subscribe({
          next: (response => {
            this.authService.currentUser = response.content;
            localStorage.setItem('userProfil', JSON.stringify(this.authService.currentUser))
            this.authService.isLogged = true;
            this.loginSucceed = true;
            this.router.navigate(['projets']);
          })
        })
      },
      error: error => {
        this.pending = false;
        this.form.reset();
        if (error.status == 401) {
          this.wrongCredentials = true;
        } else {
          this.loginFailed = true;
          console.log(error);
        }
      },
      complete: () => {
        this.pending = false;
      }
    })

  }

  goToRegister(): void {
    this.router.navigate(['enregistrement']);
  }

  goToLostPassword(): void {
    this.router.navigate(['mot-de-passe-perdu'])
  }
}

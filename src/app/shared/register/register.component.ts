import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { RegisterPayload } from '../../types/registerPayload';
import { delay } from 'rxjs';
import { LoaderComponent } from '../../ui/loader/loader.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  email: string = '';
  password: string = '';
  lastname: string = '';
  firstname: string = '';
  company: string = '';
  isDarkMode: boolean = false;
  showModal: boolean = false;
  registerSucceed: boolean = false;
  emailAlreadyUsed: boolean = false;
  registerFailed: boolean = false;
  pending: boolean = false;

  constructor (
    private formBuilder: FormBuilder,
    private registerService: RegisterService,
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
      password: [this.password, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&^*-]).{8,}$")]],
      lastname: [this.lastname, [Validators.required]],
      firstname: [this.firstname, [Validators.required]],
      company: [this.company],
    })
  }

  onSubmit(): void {
    this.pending = true;
    this.registerSucceed = false;
    this.showModal = true;
    this.email = this.form.get('email')!.value;
    this.password = this.form.get('password')!.value;
    this.lastname = this.form.get('lastname')!.value;
    this.firstname = this.form.get('firstname')!.value;
    this.company = this.form.get('company')!.value;
    const registerPayload: RegisterPayload = {
      email: this.email,
      password: this.password,
      lastname: this.lastname,
      firstname: this.firstname,
      company: this.company
    };

    this.registerService.register(registerPayload).subscribe({
      next: response => {
        this.registerSucceed = true;
        document.body.classList.add('overflow-y-hidden');
        this.pending = false;
      },
      error: error => {
        this.pending = false;
        const errorContent: {field: string, message: string}[] = error.error.content;
        if (errorContent[0].message = 'Email already used') {
          this.emailAlreadyUsed = true;
        } else {
          this.registerFailed = true;
        }
      }
    });
  }

  goToLogin(): void {
    this.router.navigate(['connexion']);
  }
}

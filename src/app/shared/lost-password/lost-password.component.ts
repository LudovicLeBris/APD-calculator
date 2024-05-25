import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LostPasswordPayload } from '../../types/lostPasswordPayload';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../ui/loader/loader.component';

@Component({
  selector: 'app-lost-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './lost-password.component.html',
  styleUrl: './lost-password.component.css'
})
export class LostPasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  email: string = '';
  isDarkMode: boolean = false;
  showModal: boolean = false;
  lostPasswordSucced: boolean = false;
  userDontExist: boolean = false;
  userDisabled: boolean = false;
  pending: boolean = false;

  constructor (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [this.email, [Validators.required, Validators.email]],
    })
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }

  onSubmit(): void {
    this.showModal = true;
    this.lostPasswordSucced = false;
    this.pending = true;
    this.email = this.form.get('email')!.value;
    const lostPasswordPayload: LostPasswordPayload = {
      email: this.email,
    };

    this.authService.lostPassword(lostPasswordPayload).subscribe({
      next: (response => {
        this.pending = false;
        this.lostPasswordSucced = true;
      }),
      error: (error => {
        this.pending = false;
        if (error.status == 404) {
          this.userDontExist = true;
        } else if (error.status == 423) {
          this.userDisabled = true;
        }
      })
    })
  }

  goToLogin(): void {
    this.router.navigate(['connexion']);
  }
}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { LoaderComponent } from '../../ui/loader/loader.component';

@Component({
  selector: 'app-update-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.css'
})
export class UpdatePasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  currentPassword: string = '';
  newPassword: string = '';
  isDarkMode: boolean = false;
  showModal: boolean = false;
  updatePasswordSucceed: boolean = false;
  wrongCurrentPassword: boolean = false;
  pending: boolean = false;

  constructor (
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      currentPassword: [this.currentPassword, [Validators.required]],
      newPassword: [this.newPassword, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&^*-]).{8,}$")]]
    })
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }

  onSubmit(): void {
    this.showModal = true;
    this.updatePasswordSucceed = false;
    this.pending = true;
    const payload: {oldPassword: string, newPassword: string} = {
      oldPassword: this.form.get('currentPassword')!.value,
      newPassword: this.form.get('newPassword')!.value
    }

    this.userService.updatePassword(payload).subscribe({
      next: (response => {
        console.log(response);
        this.pending = false;
        this.updatePasswordSucceed = true;
      }),
      error: (error => {
        this.pending = false;
        const errorContent: {field: string, message: string}[] = error.error.content;
        if (errorContent[0].field == 'password') {
          this.wrongCurrentPassword = true;
        } else {
          console.log(error);
        }
      })
    });

  }

  goToHome(): void {
    this.router.navigate(['']);
  }

  closeModal(): void {
    this.showModal = false;
    this.form.reset();
  }
}

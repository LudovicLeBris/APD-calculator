import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoaderComponent } from '../../ui/loader/loader.component';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recover-password',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
  ],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.css'
})
export class RecoverPasswordComponent implements OnInit {
  form: FormGroup = new FormGroup({});
  password: string = '';
  isDarkMode: boolean = false;
  showModal: boolean = false;
  recoverPasswordSuccess: boolean = false;
  guidDontExist: boolean = false;
  idDontMatch: boolean = false;
  recoverTimeExceeded: boolean = false;
  pending: boolean = false;

  constructor (
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      password: [this.password, [Validators.required, Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%&^*-]).{8,}$")]],
    });
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark');
  }

  onSubmit(): void {
    const guid = this.route.snapshot.params['guid'];
    this.showModal = true;
    this.recoverPasswordSuccess = false;
    this.pending = true;
    this.password = this.form.get('password')!.value;

    this.authService.recoverpassword(guid, {newPassword: this.password}).subscribe({
      next: (response => {
        this.pending = false;
        this.recoverPasswordSuccess = true;
      }),
      error: (error => {
        this.pending = false;
        console.log(error);
        const errorContent: {field: string, message: string}[] = error.error.content;
        if (errorContent[0].field == 'recover time') {
          this.recoverTimeExceeded = true;
        } else if (errorContent[0].field == 'guid') {
          this.guidDontExist = true;
        } else if (errorContent[0].field == 'id') {
          this.idDontMatch = true;
        } else {
          console.log(error);
        }
      })
    })
  }

  goToLogin(): void {
    this.router.navigate(['connexion']);
  }
}

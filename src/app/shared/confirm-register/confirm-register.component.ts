import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { LoaderComponent } from '../../ui/loader/loader.component';

@Component({
  selector: 'app-confirm-register',
  standalone: true,
  imports: [
    LoaderComponent,
  ],
  templateUrl: './confirm-register.component.html',
  styleUrl: './confirm-register.component.css'
})
export class ConfirmRegisterComponent implements OnInit {
  activationSucceed: boolean = false;
  alreadyActivated: boolean = false;
  userDontExist: boolean = false;
  pending: boolean = true;

  constructor (
    private route: ActivatedRoute,
    private registerService: RegisterService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.params['userId'];

    this.registerService.confirmRegister(userId).subscribe({
      next: ((response) => {
        this.pending = false;
        this.activationSucceed = true;
      }),
      error: ((error) => {
        this.pending = false;
        const errorContent: Array<{field: string, message: string}> = error.error.content;
        if (errorContent[0].field == 'user') {
          this.alreadyActivated = true;
        } else if (errorContent[0].field == 'id') {
          this.userDontExist = true;
        }
      })
    })
  }

  goToLogin(): void {
    this.router.navigate(['connexion']);
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-giris',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule,
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule
  ],
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.scss']
})
export class GirisComponent {
  girisForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService, 
    private router: Router
  ) {
    this.girisForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get email() {
    return this.girisForm.get('email');
  }

  get password() {
    return this.girisForm.get('password');
  }

  giris(): void {
    if (this.girisForm.valid) {
      this.authService.login(this.girisForm.value).subscribe(
        (response: any) => {
          debugger
          localStorage.setItem('token', response.token);
          this.router.navigate(['/']);
        },
        (error: any) => {
          console.error('Giriş başarısız', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}

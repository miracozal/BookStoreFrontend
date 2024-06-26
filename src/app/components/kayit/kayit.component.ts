import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Kullanici } from '../../models/kullanici';

@Component({
  selector: 'app-kayit',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule],
  templateUrl: './kayit.component.html',
  styleUrls: ['./kayit.component.scss']
})
export class KayitComponent {
  kullanici: Kullanici = {
    id: 0,
    isim: '',
    email: '',
    sifre: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  kayit(): void {
    this.authService.register(this.kullanici).subscribe(
      (response: any) => { 
        this.router.navigate(['/giris']);
      },
      (error: any) => { 
        console.error('Kayıt başarısız', error);
      }
    );
  }
}

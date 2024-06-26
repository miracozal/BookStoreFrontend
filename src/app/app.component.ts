import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { KitaplarComponent } from './components/kitaplar/kitaplar.component';
import { KitapDetaylariComponent } from './components/kitap-detaylari/kitap-detaylari.component';
import { KitapFormuComponent } from './components/kitap-formu/kitap-formu.component';
import { GirisComponent } from './components/giris/giris.component';
import { KayitComponent } from './components/kayit/kayit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    KitaplarComponent,
    KitapDetaylariComponent,
    KitapFormuComponent,
    GirisComponent,
    KayitComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookstorefrontend';
}

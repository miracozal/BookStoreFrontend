import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KitapService } from '../../services/kitap.service';
import { Kitap } from '../../models/kitap';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { YorumFormuComponent } from '../yorum-formu/yorum-formu.component';
import { YorumListesiComponent } from '../yorum-listesi/yorum-listesi.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-kitap-detaylari',
  templateUrl: './kitap-detaylari.component.html',
  styleUrls: ['./kitap-detaylari.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    RouterModule,
    YorumFormuComponent,
    YorumListesiComponent
  ]
})
export class KitapDetaylariComponent implements OnInit {
  kitap?: Kitap;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private route: ActivatedRoute,
    private router: Router,
    private kitapService: KitapService
  ) {
    this.kitap = data.kitap; 
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.kitapService.getKitap(id).subscribe(
      (data: Kitap) => {
        this.kitap = data;
      },
      (error: any) => {
        if (error.status === 401) {
          this.router.navigate(['/giris']);
        } else {
          console.error('Kitap yüklenemedi', error);
        }
      }
    );
  }
}

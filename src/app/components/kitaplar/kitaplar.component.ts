import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { KitapService } from '../../services/kitap.service';
import { Kitap } from '../../models/kitap';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-kitaplar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, HttpClientModule],
  templateUrl: './kitaplar.component.html',
  styleUrls: ['./kitaplar.component.scss']
})
export class KitaplarComponent implements OnInit {
  kitaplar: Kitap[] = [];

  constructor(private kitapService: KitapService) { }

  ngOnInit(): void {
    this.kitapService.getKitaplar().subscribe((data: Kitap[]) => {
      this.kitaplar = data;
    });
  }

  deleteKitap(id: number): void {
    this.kitapService.deleteKitap(id).subscribe(() => {
      this.kitaplar = this.kitaplar.filter(kitap => kitap.id !== id);
    });
  }
}

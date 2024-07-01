import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { KitapService } from '../../services/kitap.service';
import { Kitap } from '../../models/kitap';
import { HttpClientModule } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { KitapFormuComponent } from '../kitap-formu/kitap-formu.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { KitapDetaylariComponent } from '../kitap-detaylari/kitap-detaylari.component';
import { KitapDuzenleComponent } from '../kitap-duzenle/kitap-duzenle.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-kitaplar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatButtonModule, HttpClientModule, MatFormFieldModule,
    MatSelectModule],
  templateUrl: './kitaplar.component.html',
  styleUrls: ['./kitaplar.component.scss']
})
export class KitaplarComponent implements OnInit {
  kitaplar: Kitap[] = [];
  siraKriteri: string = 'ada';
  constructor(
    private dialog: MatDialog,
    private kitapService: KitapService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.kitapService.getKitaplar().subscribe((data: Kitap[]) => {
      this.kitaplar = data;
    });
  }
  
  openDialog(): void {
    const dialogRef = this.dialog.open(KitapFormuComponent, {
      width: '400px',
      data: {}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.kitapService.getKitaplar().subscribe((data: Kitap[]) => {
        this.kitaplar = data;
      });
    }
  );
  }

  openInfoDialog(kitap: Kitap): void {
    const dialogRef = this.dialog.open(KitapDetaylariComponent, {
      width: '400px',
      data: {kitap}
    });
    dialogRef.afterClosed().subscribe(result => {
      this.kitapService.getKitaplar().subscribe((data: Kitap[]) => {
        this.kitaplar = data;
      });
    }
  );
  }

  openChangeDialog(kitap: Kitap): void {
    const dialogRef = this.dialog.open(KitapDuzenleComponent, {
      width: '400px',
      data: {kitap}
    });
    dialogRef.afterClosed().subscribe(result => {
    this.snackBar.open('Kitap başarıyla düzenlendi!', 'X', {
      duration: 5000,
      verticalPosition: 'top'
    });
    dialogRef.close();
    this.kitapService.getKitaplar().subscribe((data: Kitap[]) => {
      this.kitaplar = data;
    });
  })
}

  deleteKitap(id: number): void {
    this.kitapService.deleteKitap(id).subscribe(() => {
      this.kitaplar = this.kitaplar.filter(kitap => kitap.id !== id);
    });
  }

  onSortChange(event: any) {
    const sortBy = event.value;
    switch (sortBy) {
      case 'title':
        this.sortByTitle();
        break;
      case 'average':
        this.sortByAverage();
        break;
      case 'price':
        this.sortByPrice();
        break;
      default:
        break;
    }
  }

  sortByTitle() {
    this.kitaplar.sort((a, b) => a.baslik.localeCompare(b.baslik));
  }

  sortByAverage() {
    this.kitaplar.sort((a, b) => b.ortalamaPuan - a.ortalamaPuan);
  }

  sortByPrice() {
    this.kitaplar.sort((a, b) => a.fiyat - b.fiyat);
  }
}

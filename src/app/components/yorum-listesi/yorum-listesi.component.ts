import { Component, Input, OnInit } from '@angular/core';
import { YorumService } from '../../services/yorum.service';
import { ActivatedRoute } from '@angular/router';
import { Yorum } from '../../models/yorum';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-yorum-listesi',
  templateUrl: './yorum-listesi.component.html',
  styleUrls: ['./yorum-listesi.component.scss'],
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule]
})
export class YorumListesiComponent implements OnInit {
  @Input() kitapId: number | undefined = 0;
  yorumlar: Yorum[] = [];

  constructor(private yorumService: YorumService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (this.kitapId !== undefined) {
      this.yorumService.getYorumlar(this.kitapId).subscribe(
        (data: Yorum[]) => {
          this.yorumlar = data;
        },
        (error: any) => {
          console.error('Yorumlar yüklenemedi', error);
        }
      );
    } else {
      console.error('Kitap ID undefined');
    }
  }
}

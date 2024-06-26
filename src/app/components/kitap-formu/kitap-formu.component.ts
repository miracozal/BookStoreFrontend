import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KitapService } from '../../services/kitap.service';
import { Kitap } from '../../models/kitap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-kitap-formu',
  templateUrl: './kitap-formu.component.html',
  styleUrls: ['./kitap-formu.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class KitapFormuComponent implements OnInit {
  kitapForm: FormGroup;
  kitapId?: number;

  constructor(
    private fb: FormBuilder,
    private kitapService: KitapService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.kitapForm = this.fb.group({
      baslik: ['', Validators.required],
      yazar: ['', Validators.required],
      yayinYili: ['', Validators.required],
      fiyat: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.kitapId = +this.route.snapshot.paramMap.get('id')!;
    if (this.kitapId) {
      this.kitapService.getKitap(this.kitapId).subscribe(
        (data: Kitap) => {
          this.kitapForm.patchValue(data);
        },
        (error: any) => {
          console.error('Kitap yüklenemedi', error);
        }
      );
    }
  }

  onSubmit(): void {
    if (this.kitapForm.valid) {
      if (this.kitapId) {
        this.kitapService.updateKitap({ ...this.kitapForm.value, id: this.kitapId }).subscribe(
          () => this.router.navigate(['/']),
          (error: any) => console.error('Kitap güncellenemedi', error)
        );
      } else {
        this.kitapService.addKitap(this.kitapForm.value).subscribe(
          () => this.router.navigate(['/']),
          (error: any) => console.error('Kitap eklenemedi', error)
        );
      }
    }
  }
}

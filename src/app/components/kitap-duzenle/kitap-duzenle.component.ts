import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KitapService } from '../../services/kitap.service';
import { Kitap } from '../../models/kitap';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-kitap-duzenle',
  templateUrl: './kitap-duzenle.component.html',
  styleUrls: ['./kitap-duzenle.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class KitapDuzenleComponent implements OnInit {
  kitapForm: FormGroup;
  kitap: Kitap;

  constructor(
    private fb: FormBuilder,
    private kitapService: KitapService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<KitapDuzenleComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { kitap: Kitap }
  ) {
    this.kitap = data.kitap;
    this.kitapForm = this.fb.group({
      baslik: ['', Validators.required],
      yazar: ['', Validators.required],
      yayinYili: ['', Validators.required],
      fiyat: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (this.kitap) {
      this.kitapForm.patchValue(this.kitap);
    }
  }

  onSubmit(): void {
    if (this.kitapForm.valid) {
      const updatedKitap = { ...this.kitapForm.value, id: this.kitap.id };
      this.kitapService.updateKitap(updatedKitap).subscribe(
        () => {
          this.snackBar.open('Kitap başarıyla güncellendi!', 'X', {
            duration: 5000,
            verticalPosition: 'top'
          });
          this.dialogRef.close(updatedKitap); 
        },
        (error: any) => console.error('Kitap güncellenemedi', error)
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

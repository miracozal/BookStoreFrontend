import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { YorumService } from '../../services/yorum.service';
import { ActivatedRoute } from '@angular/router';
import { Yorum } from '../../models/yorum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-yorum-formu',
  templateUrl: './yorum-formu.component.html',
  styleUrls: ['./yorum-formu.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule]
})
export class YorumFormuComponent implements OnInit {
  @Input() kitapId: number | undefined = 0;
  yorumForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private yorumService: YorumService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<YorumFormuComponent>,
    private snackBar: MatSnackBar,
  ) {
    this.yorumForm = this.fb.group({
      yorumMetni: ['', Validators.required],
      puan: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.yorumForm.valid) {
      const storedId = localStorage.getItem('kullaniciid');
      const kullaniciID = storedId ? +storedId : 0;
      const yorum: Yorum = {
        id: 0,
        kitapId: this.kitapId ?? 0,
        kullaniciId: kullaniciID,
        yorumMetni: this.yorumForm.value.yorumMetni,
        puan: this.yorumForm.value.puan
      };
      this.yorumService.addYorum(yorum).subscribe(
        () => {
          this.snackBar.open('Yorum başarıyla eklendi!', 'X', {
            duration: 5000,
            verticalPosition: 'top'
          });
          this.dialogRef.close();
        },
        (error) => {
          console.error('Yorum eklenemedi', error);
        }
      );
    }
  }
}
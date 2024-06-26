import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { YorumService } from '../../services/yorum.service';
import { ActivatedRoute } from '@angular/router';
import { Yorum } from '../../models/yorum';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-yorum-formu',
  templateUrl: './yorum-formu.component.html',
  styleUrls: ['./yorum-formu.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, CommonModule]
})
export class YorumFormuComponent implements OnInit {
  yorumForm: FormGroup;
  kitapID: number;

  constructor(private fb: FormBuilder, private yorumService: YorumService, private route: ActivatedRoute) {
    this.kitapID = +this.route.snapshot.paramMap.get('id')!;
    this.yorumForm = this.fb.group({
      yorumMetni: ['', Validators.required],
      puan: ['', [Validators.required, Validators.min(1), Validators.max(5)]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.yorumForm.valid) {
      const yorum: Yorum = {
        id: 0,
        kitapId: this.kitapID,
        kullaniciId: 1,  //backendden id alınacak buraya atanacak
        yorumMetni: this.yorumForm.value.yorumMetni,
        puan: this.yorumForm.value.puan
      };
      this.yorumService.addYorum(yorum).subscribe(
        () => {
          this.yorumForm.reset();
        },
        (error) => {
          console.error('Yorum eklenemedi', error);
        }
      );
    }
  }
}

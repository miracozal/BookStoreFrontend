import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitaplarComponent } from './components/kitaplar/kitaplar.component';
import { KitapDetaylariComponent } from './components/kitap-detaylari/kitap-detaylari.component';
import { KitapFormuComponent } from './components/kitap-formu/kitap-formu.component';
import { GirisComponent } from './components/giris/giris.component';
import { KayitComponent } from './components/kayit/kayit.component';

const routes: Routes = [
  { path: '', component: KitaplarComponent },
  { path: 'kitap/:id', component: KitapDetaylariComponent },
  { path: 'kitap-ekle', component: KitapFormuComponent },
  { path: 'kitap-duzenle/:id', component: KitapFormuComponent },
  { path: 'giris', component: GirisComponent },
  { path: 'kayit', component: KayitComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

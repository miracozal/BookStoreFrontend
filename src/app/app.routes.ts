import { Routes } from '@angular/router';
import { KitaplarComponent } from './components/kitaplar/kitaplar.component';
import { KitapDetaylariComponent } from './components/kitap-detaylari/kitap-detaylari.component';
import { KitapFormuComponent } from './components/kitap-formu/kitap-formu.component';
import { GirisComponent } from './components/giris/giris.component';
import { KayitComponent } from './components/kayit/kayit.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: 'giris', component: GirisComponent },
  { path: 'kayit', component: KayitComponent },
  { path: '', component: KitaplarComponent, canActivate: [AuthGuard] },
  { path: 'kitap/:id', component: KitapDetaylariComponent, canActivate: [AuthGuard] },
  { path: 'kitap-ekle', component: KitapFormuComponent, canActivate: [AuthGuard] },
  { path: 'kitap-duzenle/:id', component: KitapFormuComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'giris' }
];

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kitap } from '../models/kitap';
import { endpoints } from '../../endpoint';

@Injectable({
  providedIn: 'root'
})
export class KitapService {
  private apiUrl = endpoints.books;

  constructor(private http: HttpClient) { }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }

  getKitaplar(): Observable<Kitap[]> {
    return this.http.get<Kitap[]>(this.apiUrl.getAll, { headers: this.getHeaders() });
  }

  getKitap(id: number): Observable<Kitap> {
    return this.http.get<Kitap>(`${this.apiUrl.base}/${id}`, { headers: this.getHeaders() });
  }

  addKitap(kitap: Kitap): Observable<Kitap> {
    return this.http.post<Kitap>(this.apiUrl.add, kitap, { headers: this.getHeaders() });
  }

  updateKitap(kitap: Kitap): Observable<Kitap> {
    return this.http.post<Kitap>(this.apiUrl.update, kitap, { headers: this.getHeaders() });
  }

  deleteKitap(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl.delete}/${id}`, { headers: this.getHeaders() });
  }
}

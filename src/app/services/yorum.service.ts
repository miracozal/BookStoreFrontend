import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Yorum } from '../models/yorum';
import { endpoints } from '../../endpoint';

@Injectable({
  providedIn: 'root'
})
export class YorumService {
  private apiUrl = endpoints.reviews;

  constructor(private http: HttpClient) {}

  getYorumlar(kitapId: number): Observable<Yorum[]> {
    return this.http.get<Yorum[]>(`${this.apiUrl}/YorumlariGetir/${kitapId}`);
  }

  addYorum(yorum: Yorum): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/YorumEkle`, yorum, { headers });
  }
}

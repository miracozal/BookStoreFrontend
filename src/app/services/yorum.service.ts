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
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
  }
  getYorumlar(kitapId: number): Observable<Yorum[]> {
    return this.http.get<Yorum[]>(`${this.apiUrl}/${kitapId}`, { headers: this.getHeaders() });
  }

  addYorum(yorum: Yorum): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, yorum, { headers: this.getHeaders() });
  }
}

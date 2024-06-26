import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Kullanici } from '../models/kullanici';
import { JwtHelperService } from '@auth0/angular-jwt';
import { endpoints } from '../../endpoint';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = endpoints.auth.login;
  private registerUrl = endpoints.users.addUser;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) { }

  register(user: Kullanici): Observable<Kullanici> {
    return this.http.post<Kullanici>(this.registerUrl, user);
  }

  login(credentials: { email: string, password: string }): Observable<any> {
    const params = new HttpParams()
      .set('email', credentials.email)
      .set('sifre', credentials.password);
    return this.http.get(this.loginUrl, { params });
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return token ? !this.jwtHelper.isTokenExpired(token) : false;
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}

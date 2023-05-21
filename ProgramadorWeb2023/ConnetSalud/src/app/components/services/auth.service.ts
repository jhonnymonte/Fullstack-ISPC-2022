import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router'
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url: string = 'http://127.0.0.1:8000/';
  f: any;

  registerUser(userData: any): Observable<any>{
    return this.http.post<any>(this.api_url + 'api/register/', userData);  
  }
  
  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.api_url + 'api/login/', { username, password }, httpOptions)
      .pipe(map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        this.router.navigate(['/inicio']);
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthStateService {
  private readonly TOKEN_KEY = 'token';
  private isLoggedIn: boolean = false;



  constructor() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      this.isLoggedIn = true;
    }
  }


setLoggedIn(value: boolean) {
  this.isLoggedIn = value;
  if (value) {
    localStorage.setItem('currentUser', 'true');
  } else {
    localStorage.removeItem('currentUser');
  }
}

isUserLoggedIn(): boolean {
  return this.isLoggedIn;
}
setToken(token: string) {
  localStorage.setItem(this.TOKEN_KEY, token);
  console.log(token)
}
getToken() {
  return localStorage.getItem(this.TOKEN_KEY);

}
getLoggedInStatus(): boolean {
  return this.isLoggedIn;
   }
}

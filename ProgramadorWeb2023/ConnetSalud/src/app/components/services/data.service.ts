import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  API_URL = 'http://127.0.0.1:8000/api/users/';
  constructor(private http: HttpClient) {}
  listCitas() {
    return this.http.get<User>(this.API_URL);
  }
  delCitas(id_paciente: any) {
    return this.http.delete<User>(this.API_URL + id_paciente);
  }
  AddCitas(data: any) {
    return this.http.post<User>(this.API_URL, data);
  }
  getCitas(id_paciente: any) {
    return this.http.get<User>(this.API_URL + id_paciente + '/');
  }
  editCitas(id_paciente: number, data: any) {
    return this.http.put<User>(this.API_URL + id_paciente + '/', data);
  }
}

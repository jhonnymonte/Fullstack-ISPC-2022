import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
@Injectable({
  providedIn: 'root',
})
export class DataService {

  API_URL = 'http://127.0.0.1:8000/';

  constructor(private http: HttpClient) { }

  listCitas(){
    return this.http.get<User>(this.API_URL + 'api/citas/');
  }

  delCitas(id_paciente:any){
    return this.http.delete<User>(this.API_URL + 'api/citas/' + id_paciente);
  }

  AddCitas(data:any){
    return this.http.post<User>(this.API_URL + 'api/citas/' , data);
  }

  getCitas(id_paciente:any){
    return this.http.get<User>(this.API_URL + 'api/citas/' + id_paciente + '/');
  }

  editCitas(id_paciente:number, data:any){
    return this.http.put<User>(this.API_URL + 'api/citas/' + id_paciente + '/', data);
  }

  // Api edit-user

  getUser(id:any){
    return this.http.get<User>(this.API_URL + 'api/listusers/' + id + '/');
  }

  editUser(id:number, data:any){
    return this.http.put<User>(this.API_URL + 'api/listusers/' + id + '/', data);
  }
}

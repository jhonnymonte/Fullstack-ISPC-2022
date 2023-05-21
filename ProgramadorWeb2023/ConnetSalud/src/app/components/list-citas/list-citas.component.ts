import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})

export class ListCitasComponent implements OnInit {
  users:any;
  
  constructor(private dataservice: DataService) {}
  
  ngOnInit(): void {
    this.fetchUser();
  }
  
  deleteCitas(id_paciente:any){
    console.log(id_paciente);
    this.dataservice.delCitas(id_paciente).subscribe(()=>{
    this.fetchUser();
  })
  }
  
  fetchUser(){
    this.dataservice.listCitas().subscribe((data)=> {
    this.users=data;
    console.log(this.users);
  });
  }
}

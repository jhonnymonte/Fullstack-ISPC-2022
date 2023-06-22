import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
<<<<<<< HEAD
  styleUrls: ['./turnos.component.css']
})

export class TurnosComponent implements OnInit {
  angForm: FormGroup

  constructor(
    private fb:FormBuilder, 
    private dataService: DataService, 
    private route: Router) 
    {
      this.angForm= this.fb.group({
        dni:['', Validators.required],
        nombre:['', Validators.required],
        apellido:['', Validators.required],
        telefono:['', Validators.required],
        correo:['', Validators.required],
        fecha:['', Validators.required],
        hora:['', Validators.required],
        mensaje:['', Validators.required],
      })
    }

  ngOnInit(): void {
  }

  postdata(data:any){
    this.dataService.AddCitas(this.angForm.value).subscribe(data=>{
      this.route.navigate(['list-citas']);
    })
    

  }

=======
  styleUrls: ['./turnos.component.css'],
})
export class TurnosComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private route: Router
  ) {
    this.angForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      telefono: ['', Validators.required],
      correo: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      mensaje: ['', Validators.required],
    });
  }
  ngOnInit(): void {}
  postdata(data: any) {
    this.dataService.AddCitas(this.angForm.value).subscribe((data) => {
      this.route.navigate(['list-citas']);
    });
  }
>>>>>>> 3daa8f6286f91258f87d2ff45f0d5acf52567cc2
}

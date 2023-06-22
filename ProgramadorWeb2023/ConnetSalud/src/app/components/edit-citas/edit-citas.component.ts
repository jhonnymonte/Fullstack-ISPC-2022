import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-citas',
  templateUrl: './edit-citas.component.html',
  styleUrls: ['./edit-citas.component.css']
})

export class EditCitasComponent {
  
  angForm: FormGroup
  id_paciente: any;
  
  constructor(
  private fb:FormBuilder,
  private dataService: DataService,
  private route: Router,
  private activateRouter: ActivatedRoute,)
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
    this.activateRouter.paramMap.subscribe(paramId_paciente=>{
      this.id_paciente=paramId_paciente.get('id_paciente');
      console.log(this.id_paciente);
      this.dataService.getCitas(this.id_paciente).subscribe(data=>{
        this.angForm.patchValue(data)
      })
    })
  }

  postdata(data:any){
    this.dataService.editCitas(this.id_paciente, this.angForm.value).subscribe(data=>{
      this.route.navigate(['list-citas']);
    })
  }
}


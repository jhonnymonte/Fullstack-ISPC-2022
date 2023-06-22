import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})

export class EditUsersComponent {
  angForm: FormGroup
  id: any;

  constructor(
    private fb:FormBuilder,
    private dataService: DataService,
    private route: Router,
    private activateRouter: ActivatedRoute,)
  {
  this.angForm= this.fb.group({
    id:['', Validators.required],
    username:['', Validators.required],
    email:['', Validators.required],
    is_superuser:['', Validators.required],
    is_staff:['', Validators.required],
    date_joined:['', Validators.required],
    last_login:['', Validators.required],
    })
  }
  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe(paramId=>{
      this.id=paramId.get('id');
      console.log(this.id);
      this.dataService.getUser(this.id).subscribe(data=>{
      this.angForm.patchValue(data)
      })
    })
  }
  postdata(data:any){
    this.dataService.editUser(this.id, this.angForm.value).subscribe(data=>{
    this.route.navigate(['list-users']);
    })
  }
}

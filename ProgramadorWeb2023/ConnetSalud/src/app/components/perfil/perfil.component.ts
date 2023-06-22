import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit {
  profile: any;
  isLoading: boolean = false;
  updateSuccess: boolean = false;
  updateError: boolean = false;
  editing: boolean = false;

  constructor(private userService: UserService ) { }

  ngOnInit(): void {
   this.loadProfile();
}

  loadProfile(): void {
   this.isLoading = true;
   this.userService.getUser().subscribe(
     response => {
       this.profile = response;
       this.isLoading = false;
     },
     error => {
       console.log(error);
       this.isLoading = false;
     }
  );
}


updateProfile(): void {
  this.isLoading = true;
  this.updateSuccess = false;
  this.updateError = false;

  this.userService.updateProfile(this.profile).subscribe(
    response => {
    this.profile = response;
    this.isLoading = false;
    this.updateSuccess = true;
   },
   error => {
     console.log(error);
     this.isLoading = false;
     this.updateError = true;
   }
  );
}

startEdit(): void {
  this.editing = true;
}

cancelEdit(): void {
  this.editing = false;
}

saveChanges(): void {
  this.isLoading = true;
  this.updateSuccess = false;
  this.updateError = false;
  this.userService.updateProfile(this.profile).subscribe(
response => {
  this.profile = response;
  this.isLoading = false;
  this.updateSuccess = true;
  this.editing = false; // Salir del modo de edición después de guardar los cambios
},
error => {
  console.log(error);
  this.isLoading = false;
  this.updateError = true;
   }
  );
 }
}

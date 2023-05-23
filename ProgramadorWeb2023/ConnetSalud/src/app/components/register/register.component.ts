import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  
  myform: FormGroup;

  constructor( private authService: AuthService, private router: Router ) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
    });
    };

  get f() {
    return this.myform.controls;
  }

  registerUser(){
    console.log(this.myform.value);
    this.authService.registerUser(this.myform.value)
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
        alert('El usuario ' + data.username + ' ha sido creado');
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        alert('Este nombre de usuario ya ha sido creado');
        window.location.reload();
      }
    )
  }
}
  



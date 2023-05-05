import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service'
import { first } from 'rxjs/operators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})

export class LoginComponent implements OnInit {
  
  myform: FormGroup;

  constructor( private authService: AuthService ) {}

  ngOnInit(): void {
    this.myform = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
    };

  get f() {
    return this.myform.controls;
  }

  onSubmit() {
    console.log(this.myform.value);
    this.authService.login( this.f['username'].value, this.f['password'].value )
    .pipe(first())
    .subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
        alert('No tienes acceso')
      }
    )
  }

  }

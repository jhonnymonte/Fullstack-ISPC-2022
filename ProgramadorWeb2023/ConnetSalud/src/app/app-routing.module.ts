import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './components/guard/auth.guard';
import { NgModule } from '@angular/core'

import {
  InicioComponent,
  PlanesComponent,
  ContactoComponent,
  RecetasComponent,
  LoginComponent,
  RegisterComponent,
<<<<<<< HEAD
  MonitoreodepesoComponent,
  GuiadealimentacionComponent,
  TurnosComponent,
=======
  CarritoComponent,
  MonitoreodepesoComponent,
  
>>>>>>> 57b24e9814725c59c4a0120716042c48cee6eba6
} from "./components/index.paginas"



const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'planes', component: PlanesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'recetas', component: RecetasComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
    { path: 'monitoreodepeso', component: MonitoreodepesoComponent, canActivate:[AuthGuard]},
    { path: 'guiadealimentacion', component: GuiadealimentacionComponent, canActivate:[AuthGuard]},
    { path: 'turnos', component: TurnosComponent, canActivate:[AuthGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
=======
    { path: 'monitoreodepeso', component: MonitoreodepesoComponent },
    { path: 'carrito', component: CarritoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
  
>>>>>>> 57b24e9814725c59c4a0120716042c48cee6eba6
];

export const app_routing = RouterModule.forRoot(routes, { useHash:true });
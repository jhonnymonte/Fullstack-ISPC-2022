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
  GuiadealimentacionComponent,
  TurnosComponent,
  CarritoComponent,
  MonitoreodepesoComponent,
  
} from "./components/index.paginas"



const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'planes', component: PlanesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'recetas', component: RecetasComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'monitoreodepeso', component: MonitoreodepesoComponent, canActivate:[AuthGuard]},
    { path: 'guiadealimentacion', component: GuiadealimentacionComponent, canActivate:[AuthGuard]},
    { path: 'turnos', component: TurnosComponent, canActivate:[AuthGuard]},
    { path: 'carrito', component: CarritoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
];

export const app_routing = RouterModule.forRoot(routes, { useHash:true });

import { RouterModule, Routes } from '@angular/router';


import {
  InicioComponent,
  PlanesComponent,
  ContactoComponent,
  RecetasComponent,
  LoginComponent,
  RegisterComponent,
  CarritoComponent,
  MonitoreodepesoComponent,
  
} from "./components/index.paginas"

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'planes', component: PlanesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'monitoreodepeso', component: MonitoreodepesoComponent },
    { path: 'carrito', component: CarritoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
  
];


export const app_routing = RouterModule.forRoot(routes, { useHash:true });
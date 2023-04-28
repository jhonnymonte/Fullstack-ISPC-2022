
import { RouterModule, Routes } from '@angular/router';


import {
  InicioComponent,
  PlanesComponent,
  ContactoComponent,
  RecetasComponent,
  LoginComponent,
  RegisterComponent,
  CarritoComponent
  
} from "./components/index.paginas"

const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'planes', component: PlanesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'recetas', component: RecetasComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
    { path: 'carrito', component: CarritoComponent}
];


export const app_routing = RouterModule.forRoot(routes, { useHash:true });
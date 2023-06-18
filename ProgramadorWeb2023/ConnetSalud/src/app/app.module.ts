import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { app_routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { PlanesComponent } from './components/planes/planes.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MonitoreodepesoComponent } from './components/monitoreodepeso/monitoreodepeso.component';
import { AuthGuard } from './components/guard/auth.guard';
import {CarritoComponent} from './components/carrito/carrito.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';
import { EditCitasComponent } from './components/edit-citas/edit-citas.component';
import { TurnosComponent } from './components/turnos/turnos.component';
<<<<<<< HEAD
import { PerfilComponent } from './components/perfil/perfil.component';
=======
import { ListUsersComponent } from './components/list-users/list-users.component';
import { EditUsersComponent } from './components/edit-users/edit-users.component';
>>>>>>> edcb4c8c75443fe9d6fd615d7e4dc708dfcf9869



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    ContactoComponent,
    PlanesComponent,
    RecetasComponent,
    LoginComponent,
    RegisterComponent,
    MonitoreodepesoComponent,
    CarritoComponent,
    ListCitasComponent,
    EditCitasComponent,
    TurnosComponent,
<<<<<<< HEAD
    PerfilComponent,
=======
    ListUsersComponent,
    EditUsersComponent,
>>>>>>> edcb4c8c75443fe9d6fd615d7e4dc708dfcf9869
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

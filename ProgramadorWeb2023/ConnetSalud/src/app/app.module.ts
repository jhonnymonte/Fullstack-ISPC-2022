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
import {CarritoComponent} from './components/carrito/carrito.component'
import { AuthGuard } from './components/guard/auth.guard';

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

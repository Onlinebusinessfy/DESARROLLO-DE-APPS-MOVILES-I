import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiHolaComponent } from './components/mi-hola/mi-hola.component';
import { OtroComponenteComponent } from './components/otro-componente/otro-componente.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { TarjetaComponent } from './components/tarjeta/tarjeta.component';

@NgModule({
  declarations: [
    AppComponent,
    MiHolaComponent,
    OtroComponenteComponent,
    PrincipalComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
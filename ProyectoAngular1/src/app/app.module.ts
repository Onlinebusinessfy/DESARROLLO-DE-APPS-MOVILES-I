import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiHolaComponent } from './components/mi-hola/mi-hola.component';
import { OtroComponenteComponent } from './components/otro-componente/otro-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiHolaComponent,
    OtroComponenteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

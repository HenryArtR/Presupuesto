import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { InputComponent } from './input/input.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    InputComponent,
    BienvenidaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

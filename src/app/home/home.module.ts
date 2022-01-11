import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { InputComponent } from './panell/input/input.component';
import { ModalComponent } from './panell/input/modal/modal.component';
import { PanellComponent } from './panell/panell.component';
import { BuscadorComponent } from './pressupost-list/buscador/buscador.component';
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';
import { TablapresupuestosComponent } from './pressupost-list/tablapresupuestos/tablapresupuestos.component';

@NgModule({
  declarations: [
    HomeComponent,
    PanellComponent,
    InputComponent,
    ModalComponent,
    PressupostListComponent,
    TablapresupuestosComponent,
    BuscadorComponent
  ],
  exports: [
    HomeComponent,
    PanellComponent,
    InputComponent,
    ModalComponent,
    PressupostListComponent,
    TablapresupuestosComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class HomeModule { }

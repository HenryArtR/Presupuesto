import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { InputComponent } from './panell/input/input.component';
import { ModalComponent } from './panell/input/modal/modal.component';
import { PanellComponent } from './panell/panell.component';
import { PressupostListComponent } from './pressupost-list/pressupost-list.component';
import { TablapresupuestosComponent } from './pressupost-list/tablapresupuestos/tablapresupuestos.component';

@NgModule({
  declarations: [
    HomeComponent,
    PanellComponent,
    InputComponent,
    ModalComponent,
    PressupostListComponent,
    TablapresupuestosComponent
  ],
  exports: [
    HomeComponent,
    PanellComponent,
    InputComponent,
    ModalComponent,
    PressupostListComponent,
    TablapresupuestosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }

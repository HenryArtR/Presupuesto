import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './home/panell/panell.component';
import { InputComponent } from './home/panell/input/input.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ModalComponent } from './home/panell/input/modal/modal.component';
import { PressupostListComponent } from './home/pressupost-list/pressupost-list.component';
import { SortPipe } from './pipes/sort.pipe';
import { SortFechaPipe } from './pipes/sort-fecha.pipe';
import { TablabodyComponent } from './home/pressupost-list/tablapresupuestos/tablapresupuestos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PanellComponent,
    InputComponent,
    BienvenidaComponent,
    ModalComponent,
    PressupostListComponent,
    SortPipe,
    SortFechaPipe,
    TablabodyComponent,
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

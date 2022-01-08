import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { HomeComponent } from './home/home.component';
import { ModalComponent } from './home/panell/input/modal/modal.component';

const routes: Routes = [
  {path: '', component: BienvenidaComponent},
  {path: 'home', component: HomeComponent},
  {path: 'modal', component: ModalComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

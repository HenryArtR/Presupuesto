import { Component } from '@angular/core';
import { PressupostService } from '../service/pressupost.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css']
})
export class PressupostListComponent{

  get pressupost(){
    return this.presupuestosSrv.pressupost
  }
  mostrarPresupuesto(){
    console.log(this.presupuestosSrv.pressupost)
  }

  constructor( private presupuestosSrv: PressupostService) { }

}

import { Component } from '@angular/core';
import { SortFechaPipe } from '../../pipes/sort-fecha.pipe';
import { SortPipe } from '../../pipes/sort.pipe';
import { PressupostService } from '../../service/pressupost.service';

@Component({
  selector: 'app-pressupost-list',
  templateUrl: './pressupost-list.component.html',
  styleUrls: ['./pressupost-list.component.css'],
  providers : [SortPipe,SortFechaPipe]
})
export class PressupostListComponent{
  
  abrir: boolean = false
  ordenarAlfabeticamente(){
    let presu = this.presupuestosSrv.presupuestoOrdenado
    this.sort.transform(presu)
    this.abrir = true
  }
  ordenarPorFecha(){
    let presu = this.presupuestosSrv.presupuestoOrdenado
    this.sortfecha.transform(presu)
    this.abrir = true
  }
  reestablecer(){
    this.abrir = false
  }

  get pressupost(){
    return this.presupuestosSrv.pressupost
  }

  
  

  

  constructor( private presupuestosSrv: PressupostService, private sort: SortPipe, private sortfecha: SortFechaPipe) { }

}

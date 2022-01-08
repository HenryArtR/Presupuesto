import { Component } from '@angular/core';
import { Pressupost } from '../../interfaces/pressupost.interface';
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

  ordenarPorFecha(){
    this.sortfecha.transform(this.presupuestosSrv.pressupost)
  }
  ordenarAlfabeticamente(){
    this.sort.transform(this.presupuestosSrv.pressupost)
  }

  constructor( private presupuestosSrv: PressupostService, private sort: SortPipe, private sortfecha: SortFechaPipe) { }

}

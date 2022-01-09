import { Injectable } from '@angular/core';
import { Pressupost } from '../interfaces/pressupost.interface';

@Injectable({
  providedIn: 'root'
})
export class PressupostService {

  numPaginas: number = 0;
  numIdiomas: number = 0;
  private _total: number = 0;
  private _pressupost: Pressupost[] = [];
  presupuestoOrdenado: Pressupost[] = [];
  get total(){
    return this._total;
  }
  get pressupost(){
    return [...this._pressupost];
  }
  

  agregarPresupuesto(presupuesto: Pressupost){
    if(!this._pressupost.includes(presupuesto)){
      this._pressupost.push(presupuesto)
    }
  }

  calcularTotal(numbPag: number, numIdiomas: number){
    if(numbPag === 0){
      this._total = numIdiomas * 30
    }else if(numIdiomas === 0){
      this._total = numbPag * 30
    }else{
      this._total = numbPag * numIdiomas * 30
    }
    
  }

  
}

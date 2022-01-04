import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PressupostService implements OnInit{

  private _total: number = 0

  get total(){
    return this._total;
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

  ngOnInit(): void {
    
  }
  
  
}

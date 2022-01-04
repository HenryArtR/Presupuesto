import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PressupostService implements OnInit{

  private _total: number = 0

  get total(){
    return this._total;
  }

  calcularTotal(numbPag: string, numIdiomas: string){
    if(numbPag === ""){
      this._total = parseInt(numIdiomas) * 30
    }else if(numIdiomas === ""){
      this._total = parseInt(numbPag) * 30
    }else{
      this._total = parseInt(numbPag) * parseInt(numIdiomas) * 30
    }
    
  }

  ngOnInit(): void {
    
  }
  
  
}

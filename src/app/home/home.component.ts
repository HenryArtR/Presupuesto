import { Component, ElementRef, ViewChild } from '@angular/core';
import { PressupostService } from '../service/pressupost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  preu: number = 0;
  open: boolean = false;

  web(valor: boolean){
    if(valor === true){
      this.preu += 500;
      this.open = true;
    }else{
      this.preu -= 500;
      this.open = false
    }
  }

  seo(valor:boolean){
    valor ? this.preu += 300 : this.preu -= 300
  }

  ads(valor: boolean){
    valor ? this.preu += 200 : this.preu -= 200
  }

  get total(){
    return this.presupostSrv.total + this.preu
  }

  constructor( private presupostSrv: PressupostService){}

}

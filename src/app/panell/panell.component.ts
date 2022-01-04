import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PressupostService } from '../service/pressupost.service';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html'
})
export class PanellComponent {

  numpag: string = ""
  numidiomas: string = ""
  miFormulario = new FormGroup({
    valor1: new FormControl('', Validators.required),
    valor2: new FormControl('', Validators.required)
  })
  

  cambiaPag(valor: string, valor2: string){
    this.presupostSrv.calcularTotal(valor, valor2)
  }
  cambiaIdioma(valor: string, valor2: string){
    this.presupostSrv.calcularTotal(valor, valor2)
  }

  constructor( private presupostSrv: PressupostService){}

  

  

}

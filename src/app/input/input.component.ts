import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PressupostService } from '../service/pressupost.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {

  miFormulario: FormGroup = new FormGroup ({
    valor1: new FormControl('', Validators.required),
    valor2: new FormControl('', Validators.required)
  })

  valor1: number = 0
  valor2: number = 0

  agregarValor(){
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
  }

  suma1(){
    this.valor1++
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
  }
  resta1(){
    this.valor1--
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
  }

  suma2(){
    this.valor2++
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
  }
  resta2(){
    this.valor2--
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
  }


  constructor( private presupostSrv: PressupostService){}

}

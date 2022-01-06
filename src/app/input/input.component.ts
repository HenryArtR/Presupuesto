import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PressupostService } from '../service/pressupost.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnDestroy {

  miFormulario = new FormGroup ({
    numpag: new FormControl('', Validators.required),
    numidiomas: new FormControl('', Validators.required)
  });

  valor1: number = 0;
  valor2: number = 0;
  cantidad: string = '';


  cambiaPag(){
    this.cantidad = 'paginas'
  }
  cambiaIdioma(){
    this.cantidad = "idiomas"
  }

  agregarValor(){
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
    this.presupostSrv.numPaginas = this.valor1
    this.presupostSrv.numIdiomas = this.valor2
  }

  suma1(){
    this.valor1++
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
    this.presupostSrv.numPaginas = this.valor1
    this.presupostSrv.numIdiomas = this.valor2
  }
  resta1(){
    this.valor1--
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
    this.presupostSrv.numPaginas = this.valor1
    this.presupostSrv.numIdiomas = this.valor2
  }

  suma2(){
    this.valor2++
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
    this.presupostSrv.numPaginas = this.valor1
    this.presupostSrv.numIdiomas = this.valor2
  }
  resta2(){
    this.valor2--
    this.presupostSrv.calcularTotal(this.valor1, this.valor2)
    this.presupostSrv.numPaginas = this.valor1
    this.presupostSrv.numIdiomas = this.valor2
  }


  constructor( private presupostSrv: PressupostService){}

  ngOnDestroy(): void {
    this.presupostSrv.calcularTotal(0, 0)
    this.presupostSrv.numPaginas = 0
    this.presupostSrv.numIdiomas = 0
  }


}

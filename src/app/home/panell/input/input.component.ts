import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PressupostService } from '../../../service/pressupost.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnDestroy {

  miFormulario = new FormGroup ({
    numpag: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]/)]),
    numidiomas: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]/)])
  });
  
  cantidad: string = '';
  valor1: number = 0
  valor2: number = 0


  cambiaPag(){
    this.cantidad = 'paginas'
  }
  cambiaIdioma(){
    this.cantidad = "idiomas"
  }

  agregarValor(){
    if(this.valor1 >= 0 && this.valor2 >= 0 ){
      this.presupostSrv.calcularTotal(this.valor1, this.valor2)
      this.presupostSrv.numPaginas = this.valor1
      this.presupostSrv.numIdiomas = this.valor2
      this.escucharParametro()
    }else{
      alert('introduce un numero entero')
    }
  }

  suma1(){
    if(this.valor1 >= 0){
      this.valor1++
    }
    this.agregarValor()
    this.escucharParametro()
  }
  resta1(){
    if(this.valor1 > 0){
      this.valor1--
    }
    this.agregarValor()
    this.escucharParametro()
  }

  suma2(){
    if(this.valor2 >= 0){
      this.valor2++
    }
    this.agregarValor()
    this.escucharParametro()
  }
  resta2(){
    if(this.valor2 > 0){
      this.valor2--
    }
    this.agregarValor()
    this.escucharParametro()
  }

  escucharParametro(){
    this.router.navigate(
      ['home'],{queryParamsHandling: 'merge', queryParams: {nPaginas: this.valor1, nIdiomas: this.valor2}}
    )
  }


  constructor( private presupostSrv: PressupostService, private router: Router){
  }

  ngOnDestroy(): void {
    this.presupostSrv.calcularTotal(0, 0)
    this.presupostSrv.numPaginas = 0
    this.presupostSrv.numIdiomas = 0
    this.router.navigate(
      ['home'],{queryParamsHandling: 'merge', queryParams: {nPaginas: 0, nIdiomas: 0}}
    )
  }


}

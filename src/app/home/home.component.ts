import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pressupost } from '../interfaces/pressupost.interface';
import { PressupostService } from '../service/pressupost.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  preu: number = 0;
  services: string[] = [];
  open: boolean = false;

  @ViewChild('nompresu') nomPresu!: ElementRef<HTMLInputElement>;
  @ViewChild('nomusu') nomUsu!: ElementRef<HTMLInputElement>;

  validador: FormGroup;




  web(valor: boolean){
    if(valor === true){
      this.preu += 500;
      this.open = true;
      this.services.push('web')
    }else{
      this.preu -= 500;
      this.open = false;
      this.services = this.services.filter(srv => !srv.includes('web'))
    }
  }

  seo(valor:boolean){
    valor ? this.preu += 300 : this.preu -= 300;
    valor ? this.services.push('seo') : this.services = this.services.filter(srv => !srv.includes('seo'))

  }

  ads(valor: boolean){
    valor ? this.preu += 200 : this.preu -= 200;
    valor ? this.services.push('ads') : this.services = this.services.filter(srv => !srv.includes('ads'))
  }
  agregar(){
    let fechaActual = formatDate(Date.now(), 'dd-MM-yyyy HH:mm:ss', 'en-US');
    let presupuesto: Pressupost = {
      servicios: this.services,
      titulo: this.nomPresu.nativeElement.value,
      cliente: this.nomUsu.nativeElement.value,
      precio: this.total,
      numPaginas: this.presupostSrv.numPaginas,
      numIdiomas: this.presupostSrv.numIdiomas,
      data: fechaActual
    }
    this.presupostSrv.agregarPresupuesto(presupuesto)
    this.nomUsu.nativeElement.value = ''
    this.nomPresu.nativeElement.value = ''
    console.log(fechaActual)
  }

  get total(){
    return this.presupostSrv.total + this.preu
  }

  constructor( private presupostSrv: PressupostService, private _builder: FormBuilder){
    this.validador = _builder.group({
      titulo: ['', Validators.required],
      usuario: ['', Validators.required]
    })

    

  }
  ngOnInit(): void {
    
  }

}

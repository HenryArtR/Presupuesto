import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pressupost, ServicesParams } from '../interfaces/pressupost.interface';
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
  serviceParams: ServicesParams = {
    web: false,
    seo: false,
    ads: false
  }
  
  web(valor: boolean){
    if(valor === true){
      this.preu += 500;
      this.open = true;
      this.serviceParams.web = true
      this.services.push('web')
    }else{
      this.preu -= 500;
      this.open = false;
      this.serviceParams.web = false
      
      this.services = this.services.filter(srv => !srv.includes('web'))
    }
    
    this.escucharParametro()
  }

  seo(valor:boolean){
    valor ? this.preu += 300 : this.preu -= 300;
    valor ? this.services.push('seo') : this.services = this.services.filter(srv => !srv.includes('seo'));
    valor ? this.serviceParams.seo = true : this.serviceParams.seo = false
    this.escucharParametro()
  }

  ads(valor: boolean){
    valor ? this.preu += 200 : this.preu -= 200;
    valor ? this.services.push('ads') : this.services = this.services.filter(srv => !srv.includes('ads'))
    valor ? this.serviceParams.ads = true : this.serviceParams.ads = false
    this.escucharParametro()
  }
  agregar(){
    let fechaActual = formatDate(Date.now(), 'dd-MM-yyyy HH:mm:ss', 'en-US');
    let servicio = this.services
    let presupuesto: Pressupost = {
      servicios: servicio,
      titulo: this.nomPresu.nativeElement.value,
      cliente: this.nomUsu.nativeElement.value,
      precio: this.total,
      numPaginas: this.presupostSrv.numPaginas,
      numIdiomas: this.presupostSrv.numIdiomas,
      data: fechaActual
    }
    if (this.nomUsu.nativeElement.value && this.nomPresu.nativeElement.value !== '') {
      this.presupostSrv.agregarPresupuesto(presupuesto)
      this.presupostSrv.presupuestoOrdenado.push(presupuesto)
    }
    this.nomUsu.nativeElement.value = ''
    this.nomPresu.nativeElement.value = ''
  }
  
  escucharParametro(){
    this.router.navigate(
      ['home'],{queryParams: this.serviceParams}
    )
  }
  
  get total(){
    return this.presupostSrv.total + this.preu
  }

  constructor( private presupostSrv: PressupostService, private _builder: FormBuilder, private router: Router, private route: ActivatedRoute){
    this.validador = _builder.group({
      titulo: ['', [Validators.required, Validators.pattern(/^[a-zA-z]/)]],
      usuario: ['', [Validators.required, Validators.pattern(/^[a-zA-z]/)]]
    })
    
    
    
  }
  ngOnInit(): void {
    
    
  }
  
}

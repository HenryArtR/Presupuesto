import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pressupost } from 'src/app/interfaces/pressupost.interface';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { PressupostService } from 'src/app/service/pressupost.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  providers: [FilterPipe]
})
export class BuscadorComponent implements OnInit {

  @ViewChild('buscador') buscador!: ElementRef<HTMLInputElement>
  resultado: Pressupost[] = [];
  open: boolean = false
  encontrarPresupuesto(){
    let titulo = this.buscador.nativeElement.value
    let presupuesto = this.Srv.pressupost
    let result = this.filter.transform(presupuesto, titulo)
    this.resultado = result
    this.open = true
    this.buscador.nativeElement.value = ''
  }


  constructor(private Srv: PressupostService, private filter: FilterPipe ) { }

  ngOnInit(): void {
  }

}

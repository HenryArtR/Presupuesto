import { Component, OnInit } from '@angular/core';
import { Pressupost } from 'src/app/interfaces/pressupost.interface';
import { PressupostService } from '../../../service/pressupost.service';

@Component({
  selector: 'app-tablabody',
  templateUrl: './tablapresupuestos.component.html',
  styleUrls: ['./tablapresupuestos.component.css']
})
export class TablapresupuestosComponent implements OnInit {

  getOrdenado: Pressupost[] = this.presupostSrv.presupuestoOrdenado;

  constructor(private presupostSrv: PressupostService) { }

  ngOnInit(): void {
  }

}

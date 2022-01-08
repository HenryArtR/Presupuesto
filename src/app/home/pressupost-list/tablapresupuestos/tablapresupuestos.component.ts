import { Component, OnInit } from '@angular/core';
import { PressupostService } from '../../../service/pressupost.service';

@Component({
  selector: 'app-tablabody',
  templateUrl: './tablapresupuestos.component.html',
  styleUrls: ['./tablapresupuestos.component.css']
})
export class TablabodyComponent implements OnInit {

  get pressupost(){
    return this.presupostSrv.pressupost
  }

  constructor(private presupostSrv: PressupostService) { }

  ngOnInit(): void {
  }

}

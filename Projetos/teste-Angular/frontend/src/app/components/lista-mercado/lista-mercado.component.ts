import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-mercado',
  templateUrl: './lista-mercado.component.html',
  styleUrls: ['./lista-mercado.component.css']
})
export class ListaMercadoComponent implements OnInit {



  @Input() list: Array<any> = []; 

  toggle: boolean = true;
  visible: string = 'limpeza'
  
  

  constructor( ) { }

  ngOnInit() {
  }

  ConvertNumber(stringNum : string) {
    return parseInt(stringNum)
  }
  
  orange() {
  this.toggle = !this.toggle;
  this.visible = !this.toggle ? 'frutas' : 'limpeza'
  }
  switchCategory() {
    return this.visible
  }

  getToggle() {
    return this.toggle
  }
  
}

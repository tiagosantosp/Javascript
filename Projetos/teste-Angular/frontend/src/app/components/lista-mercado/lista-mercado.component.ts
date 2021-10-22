import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-lista-mercado',
  templateUrl: './lista-mercado.component.html',
  styleUrls: ['./lista-mercado.component.css']
})
export class ListaMercadoComponent implements OnInit {

  @Input() frutas = [];
  @Input() limpeza: string = 'limpeza';

  @Input() list: Array<any> = []; 

  

  constructor( ) { }

  ngOnInit() {
    
  }

  ConvertNumber(stringNum : string) {
    return parseInt(stringNum)
  }

  
}

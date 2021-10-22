import { Component, Input } from '@angular/core';
import { List } from './List';
import { ListaMercadoService } from './lista-mercado.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'teste-Angular';

  @Input() list: List[] = []; 

  constructor( private service: ListaMercadoService) { }

  ngOnInit() {
     this.service.list().subscribe( data => this.list = data)
  }




  
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  showMessege( msg: string) : void {
    console.log(msg)
  }
}

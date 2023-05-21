import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: any[] = [
    { name: 'Basico', price:  1000, image: '../assets/img/Basico.png' },
    { name: 'Intermedio', price:  1500, image: '../assets/img/Intermedio.png' },
    { name: 'Avanzado', price:  3000, image: '../assets/img/Intensivo.png' }
  ];
  

  constructor() { }

  getProducts(): any[] {
    return this.products;
  }
  removeProduct(product: any) {
    const index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

}



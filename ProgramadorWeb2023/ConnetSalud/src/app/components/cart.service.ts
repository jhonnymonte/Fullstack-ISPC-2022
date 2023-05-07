import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: any[] = [
    { name: 'Basico', price: 1000 },
    { name: 'Intermedio', price: 1500 },
    { name: 'Avanzado', price: 3000 }
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



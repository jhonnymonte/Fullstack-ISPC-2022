import { Component, Inject, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  products: any[];

  constructor(@Inject(CartService) private cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }
  removeProduct(product: any) {
    this.cartService.removeProduct(product);
  }

}


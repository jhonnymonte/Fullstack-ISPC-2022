import { TestBed } from '@angular/core/testing';

<<<<<<< HEAD
import { CartService } from './services/cart.service';
=======
import { CartService } from './cart.service';
>>>>>>> ediberto-nueva

describe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {

  cartItems: Product[];
  finalBill = 0.0;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.cartItems = this.appService.getCartItems();
    // tslint:disable-next-line:no-unused-expression
    this.cartItems.length && this.calculateBill();
  }

  calculateBill(): void {
    if (this.cartItems.length) {
      this.finalBill = this.cartItems.map((item) => item.price * item.count).reduce((a, b) => a + b);
    } else {
      this.finalBill = 0.0;
    }
  }

  updateProductCount(count: number, product: Product): void {
    if (count === 0) {
      this.cartItems = this.cartItems.filter((item) => item.title !== product.title);
      this.appService.updateCart(product);
    } else {
      const index = this.cartItems.findIndex((item: Product) => item.title === product.title);
      this.cartItems[index].count = count;
    }
    this.calculateBill();
  }

  _goToHomePage(): void {
    this.router.navigate(['/product-list']);
  }

}

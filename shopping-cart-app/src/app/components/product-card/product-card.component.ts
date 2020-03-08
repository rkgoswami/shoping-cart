import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.less']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;

  isAddedToCart: boolean;
  imageUrl: string;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    this.imageUrl = '/assets/images/' + this.product.filename;
  }

  _cartButtonClick(): void {
    if (this.product.isAddedToCart) {
      this.router.navigate(['/cart']);
    } else {
      this.product.isAddedToCart = true;
      this.product.count = 1;
      this.appService.addToCart(this.product);
    }
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.less']
})
export class NavigationBarComponent implements OnInit, OnDestroy {

  pageTitle = 'FoodKart';
  cartCount: number;
  countSubscription: Subscription;

  constructor(private router: Router,
              private appService: AppService) {
  }

  ngOnInit() {
    this.countSubscription = this.appService.addedToCart$.subscribe((count: number) => {
      this.cartCount = count;
    });
  }

  ngOnDestroy(): void {
    // tslint:disable-next-line:no-unused-expression
    this.countSubscription && this.countSubscription.unsubscribe();
  }

  _onCartClick() {
    this.router.navigate(['/cart']);
  }

  _goToHomePage(): void {
    this.router.navigate(['/product-list']);
  }
}

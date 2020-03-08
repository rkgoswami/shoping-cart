import { Injectable } from '@angular/core';
import { Subject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/product';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    private cartItems: Product[] = [];
    private productUrl = 'assets/utils/products.json';

    // subject for change event of adding to cart
    private addedToCartSubject = new Subject<number>();
    // observer for above subject
    addedToCart$ = this.addedToCartSubject.asObservable();

    constructor(private httpClient: HttpClient) { }

    private publishAddingOfItemToCart() {
        this.addedToCartSubject.next(this.cartItems.length);
    }

    addToCart(product: Product): void {
        const index = this.cartItems.findIndex((item) => item.title === product.title);
        if (index > -1) {
            this.cartItems[index].count++;
        } else {
            this.cartItems.push(product);
        }
        this.publishAddingOfItemToCart();
    }

    updateCart(product: Product): void {
        this.cartItems = this.cartItems.filter((item) => item.title !== product.title);
        this.publishAddingOfItemToCart();
    }

    getProducts(): Observable<any> {
        return this.httpClient.get(this.productUrl);
    }

    getCartItems(): any {
        return this.cartItems;
    }

    getCartItemCount(): any {
        return this.cartItems.length;
    }
}

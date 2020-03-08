import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CartComponent } from './components/cart/cart.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { CustomButtonComponent } from './components/custom-button/custom-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    SearchBarComponent,
    ProductPageComponent,
    ErrorPageComponent,
    CustomButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

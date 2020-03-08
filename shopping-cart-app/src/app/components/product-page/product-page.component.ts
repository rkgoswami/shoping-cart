import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.less']
})
export class ProductPageComponent implements OnInit {

  productList: Product[];
  filteredProducts: Product[];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getProducts().subscribe((list) => {
      this.productList = list;
      this.filteredProducts = list;
    });
  }

  _filterList(searchText: string): void {
    this.filteredProducts = this.productList.filter((item) =>
      (item.title.toLowerCase().concat(item.type.toLowerCase())).includes(searchText.toLowerCase()));
  }

  _sortList(sortingState: any) {
    this.filteredProducts.sort( (a, b) => {
      const nameA = a.title.toLowerCase();
      const nameB = b.title.toLowerCase();
      if (nameA < nameB) {
        return sortingState === 'ASC' ? -1 : 1;
      }
      if (nameA > nameB) {
        return sortingState === 'ASC' ? 1 : -1;
      }
      return 0;
    });
  }

}

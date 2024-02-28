import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {categories, products} from '../../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  title = "";
  cat = 0;

  constructor(private route: ActivatedRoute) {
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
  share() {
    window.open("https://t.me/share/url?url="+window.location.href+"&text=Look what I found, dude","_blank");
  }
  remove(pid : number) {
    products[pid].isRemoved = true;
  }
  slide(dir : number, pid : number): void {
    if (dir) {
      if (products[pid].curimg >= products[pid].image.length-1) {
        products[pid].curimg = 0;
      }
      else products[pid].curimg++;
    }
    else {
      if (products[pid].curimg <= 0) {
        products[pid].curimg = products[pid].image.length-1;
      }
      else products[pid].curimg--;
    }
  }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const catIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = products.filter(product => product.category==catIdFromRoute);
    this.title = categories[catIdFromRoute].name;
    this.cat = catIdFromRoute;
  }
}

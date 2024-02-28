import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product, products } from '../../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  i = 0;
  cat = 0;
  product: Product | undefined;
  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
  like() : void {
    if (this.product) this.product.likes++;
  }
  slide(dir : number) {
    if (this.product) {
      if (dir) {
        if (this.product.curimg >= this.product.image.length - 1) {
          this.product.curimg = 0;
        } else this.product.curimg++;
      } else {
        if (this.product.curimg <= 0) {
          this.product.curimg = this.product.image.length - 1;
        } else this.product.curimg--;
      }
    }
  }
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    const catIdFromRoute = Number(routeParams.get('categoryId'));
    this.i = productIdFromRoute;

    this.product = products.find(product => product.id === productIdFromRoute);
    this.cat = catIdFromRoute;
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CategoriesComponent } from './categories/categories.component';
import {Button, ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CategoriesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    RouterModule.forRoot([
      {path: '', component: CategoriesComponent},
      {path: 'products/:categoryId', component: ProductListComponent},
      {path: 'products/:categoryId/:productId', component: ProductDetailsComponent},
      {path: 'cart', component: CartComponent},
      {path: 'shipping', component: ShippingComponent},
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

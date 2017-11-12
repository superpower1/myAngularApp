import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products: Observable<Product[]>;

  private imgUrl = 'http://placehold.it/300x150';

  constructor(private prodService: ProductService) {
  	
   }

  ngOnInit() {

  	this.products = this.prodService.getProducts();

  }

}

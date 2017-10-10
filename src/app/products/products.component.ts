import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products: Product[];

  private imgUrl = 'http://placehold.it/300x150';

  private keyword: string;

  private titleFilter:FormControl = new FormControl();

  constructor(private prodService: ProductService) {
  	this.titleFilter.valueChanges
  		.debounceTime(500)
  		.subscribe(
  			value => this.keyword = value
  		);
   }

  ngOnInit() {

  	this.products = this.prodService.getProducts();

  }

}



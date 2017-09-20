import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  private products: Product[];

  private imgUrl = 'http://placehold.it/300x150';

  constructor(private prodService: ProductService) { }

  ngOnInit() {

  	this.products = this.prodService.getProducts();

  }

}



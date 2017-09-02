import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	private products: Array<Product>;

  constructor() { }

  ngOnInit() {

  	this.products = [
  		new Product(1, "第1个产品", 1.99, 3.5, "这是第一个产品", ["cate1", "cate2"]),
  		new Product(2, "第2个产品", 4.99, 4.5, "这是第一个产品", ["cate1", "cate2"]),
  		new Product(3, "第3个产品", 6.99, 2.5, "这是第一个产品", ["cate1", "cate2"]),
  		new Product(4, "第4个产品", 9.99, 5.0, "这是第一个产品", ["cate1", "cate2"]),
  		new Product(5, "第5个产品", 2.99, 3.0, "这是第一个产品", ["cate1", "cate2"]),
  		new Product(6, "第6个产品", 7.99, 1.5, "这是第一个产品", ["cate1", "cate2"]),
  	]

  }

}

export class Product {
	
	constructor(
		public id:number,
		public title:string,
		public price:number,
		public rating:number,
		public desc:string,
		public cate:Array<string>

		) {
		
	}
}

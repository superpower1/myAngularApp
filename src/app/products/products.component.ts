import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	private products: Array<Product>;
  private imgUrl = 'http://placehold.it/300x150';

  constructor() { }

  ngOnInit() {

  	this.products = [
  		new Product(1, "M99", 1.99, 3.5, "M99", ["RF"]),
  		new Product(2, "M1887", 4.99, 4.5, "M1887", ["SG"]),
  		new Product(3, "G41", 6.99, 2.5, "G41", ["AR"]),
  		new Product(4, "UMP45", 9.99, 5.0, "UMP45", ["AMG"]),
  		new Product(5, "M950A", 2.99, 3.0, "M950A", ["HG"]),
  		new Product(6, "MG4", 7.99, 1.5, "MG4", ["MG"]),
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

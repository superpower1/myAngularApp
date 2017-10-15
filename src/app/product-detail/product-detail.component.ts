import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService, Product, Comment } from "../shared/product.service";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

	private product: Product;
	private comments: Comment[];

  newRating: number = 5;
  newComment: string = "";

  constructor(private routeInfo: ActivatedRoute, private prodService: ProductService) { }

  ngOnInit() {
  	let productID: number = this.routeInfo.snapshot.params["prodID"];
  	this.product = this.prodService.getProduct(productID);
  	this.comments = this.prodService.getComments(productID);
  }

  addComment() {
    
  }

}

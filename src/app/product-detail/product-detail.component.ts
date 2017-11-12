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

  isCommentHidden:boolean = true;

  constructor(private routeInfo: ActivatedRoute, private prodService: ProductService) { }

  ngOnInit() {
  	let productID: number = this.routeInfo.snapshot.params["prodID"];
  	this.prodService.getProduct(productID).subscribe(product => this.product = product);
  	this.prodService.getComments(productID).subscribe(comments => this.comments = comments);
  }

  addComment() {
    let now = new Date().toISOString();
    let comment = new Comment(0, this.product.id, now, "sp1", this.newRating, this.newComment);
    this.comments.unshift(comment);

    // Calculate the new average rating
    let sum = 0;
    for (var i = 0; i < this.comments.length; i++) {
      sum += this.comments[i].rating;
    }
    this.product.rating = sum/this.comments.length;

    this.newRating = 5;
    this.newComment = "";
    this.isCommentHidden = true;

  }

}

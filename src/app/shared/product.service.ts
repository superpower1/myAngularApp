import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class ProductService {

  constructor(private http:Http) {

  }

  getAllCategories(): string[] {
  	return ["HG", "SMG", "AR", "RF", "MG", "SG"];
  }

  getProducts(): Observable<Product[]> {
  		return this.http.get('/api/products').map(res => res.json());
  	}

  getProduct(id:number):Observable<Product> {
  	return this.http.get('/api/product/'+id).map(res => res.json());
  }

  getComments(id:number):Observable<Comment[]> {
  	return this.http.get('/api/product/'+id+'/comments').map(res => res.json());
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

export class Comment {

	constructor(
		public id:number,
		public productID:number,
		public timeStamp:string,
		public user:string,
		public rating:number,
		public content:string

		) {

	}
}

import { Component, OnInit } from '@angular/core';
import {
	FormControl,
	FormGroup,
	Validators,
	FormBuilder
} from '@angular/forms';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	formModel:FormGroup;

	categories: string[];

  constructor(private productService: ProductService) {
  	let fb = new FormBuilder();
  	this.formModel = fb.group({
  		title: ['', Validators.minLength(2)],
  		price: [null, this.posNumValidator],
  		category: ['-1']
  	});
   }

  ngOnInit() {
  	this.categories = this.productService.getAllCategories();
  }

  posNumValidator(control: FormControl): any {
  	if(!control.value) {
  		return null;
  	}
  	let price = parseInt(control.value);
  	if(price > 0) {
  		return null;
  	}
  	else {
  		// posNum is the name of the error which will be used as formModel.hasError('posNum', 'price') in html model
  		return {posNum: true};
  	}
  }

  onSearch() {
  	if(this.formModel.valid){
  		console.log(this.formModel.value);
			this.productService.searchEvent.emit(this.formModel.value);
  	}
  }

}

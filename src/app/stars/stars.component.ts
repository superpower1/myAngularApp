import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {

	private stars: boolean[];

	@Input()
	private rating: number = 0;
  @Input()
  private readOnly: boolean = true;

  constructor() { }

  ngOnInit() {
  	this.stars = [];
  	for (var i = 1; i <= 5; i++) {
  		this.stars.push(i>this.rating);
  		}
  }

  clickStar(i: number) {
    if(!this.readOnly){
      this.rating = i+1;
      this.ngOnInit();
    }
    
  }

}

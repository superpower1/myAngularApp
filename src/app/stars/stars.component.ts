import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit, OnChanges {

	private stars: boolean[];

	@Input()
	private rating: number = 0;

  // In order to use [(rating)] two way data binding in its parent component, the name of output here must be ratingChange
  @Output()
  private ratingChange:EventEmitter<number> = new EventEmitter();

  @Input()
  private readOnly: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  clickStar(i: number) {
    if(!this.readOnly){
      this.rating = i+1;

      // Emit the new rating when user click on stars so its parent component can get the rating
      this.ratingChange.emit(this.rating);
    }
    
  }

  // If @Input rating change, then the stars[] array should change as well
  ngOnChanges(changes: SimpleChanges):void {
    this.stars = [];
    for (var i = 1; i <= 5; i++) {
      this.stars.push(i>this.rating);
      }
  }

}

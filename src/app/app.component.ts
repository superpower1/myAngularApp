import { Component } from '@angular/core';

export class Hero {
	id: number;
	name: string;
}

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<h1>{{title}}</h1><h2>{{hero.name}} details!</h2>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Vrains';
  hero: Hero = {
		id: 1,
		name: 'Playmaker'
	};
}

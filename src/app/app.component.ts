import { Component } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component';
@Component({
  selector: 'app-root',
  template: `<h1>Hi</h1>
   {{title}} 
   <app-heroes></app-heroes>`,
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'am here Welcome to the test now';
}
 
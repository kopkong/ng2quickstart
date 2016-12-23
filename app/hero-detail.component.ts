/**
 * Created by colin on 2016/12/23.
 */

import {Component, Input} from "@angular/core";
import {Hero} from './hero';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: {{hero.id}}</label></div>
      <div>
        <input type="text" [(ngModel)]="hero.name" placeholder="name">
      </div>
    </div>
  `
})

export class HeroDetailComponent {
  @Input()
  hero: Hero
}

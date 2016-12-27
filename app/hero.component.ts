import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl: 'hero.component.html',
  styleUrls: [ 'hero.component.css' ]
})

export class HeroComponent implements OnInit {
  heroes : Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService,
    private router : Router
  ){};

  ngOnInit(): void {
    this.getHeroes();
  };

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

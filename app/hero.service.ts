/**
 * Created by colin on 2016/12/23.
 */

import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {
  getHeroes() : Promise<Hero[]>{
    return Promise.resolve(HEROES);
  }
}

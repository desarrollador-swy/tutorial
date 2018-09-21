import { Injectable } from '@angular/core';
import { Heroe } from './heroe';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

getHeroes(): Heroe[] {
  return HEROES;
}

  constructor() { }
}

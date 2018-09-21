import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroService  } from '../hero.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[];
  heroe: Heroe;

  constructor( private heroservicio: HeroService ) { }


  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Heroe): void {
  console.log(hero);
    this.heroe = hero;
  }
  getHeroes(): void {
    this.heroservicio.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}

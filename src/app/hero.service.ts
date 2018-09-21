import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Heroe } from './heroe';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(private messageService: MessageService) { }

getHeroes(): Observable<Heroe[]> {
  // TODO: send the message _after_ fetching the heroes
  this.messageService.add('esto es una prueba');
  return of(HEROES);
}

}

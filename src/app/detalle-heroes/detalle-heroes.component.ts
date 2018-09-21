import { Component, OnInit, Input } from '@angular/core';

import { Heroe} from '../heroe';
@Component({
  selector: 'app-detalle-heroes',
  templateUrl: './detalle-heroes.component.html',
  styleUrls: ['./detalle-heroes.component.css']
})
export class DetalleHeroesComponent implements OnInit {

  @Input() detalle: Heroe;

  constructor() { }

  ngOnInit() {
  }

}

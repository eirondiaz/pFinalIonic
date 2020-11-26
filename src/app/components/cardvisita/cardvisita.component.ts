import { Visita } from './../../Models/Visita';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardvisita',
  templateUrl: './cardvisita.component.html',
  styleUrls: ['./cardvisita.component.scss'],
})
export class CardvisitaComponent implements OnInit {

  @Input('data') visita: Visita
  
  constructor() { }

  ngOnInit() {}


}

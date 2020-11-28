import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from 'src/app/Models/Paciente';

@Component({
  selector: 'app-cardpacientezodiac',
  templateUrl: './cardpacientezodiac.component.html',
  styleUrls: ['./cardpacientezodiac.component.scss'],
})
export class CardpacientezodiacComponent implements OnInit {

  @Input('data') paciente: Paciente
  @Input() zodiaco: string

  constructor() { }

  ngOnInit() {}

}

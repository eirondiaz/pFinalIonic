import { Component, OnInit, Input } from '@angular/core';
import { Paciente } from 'src/app/Models/Paciente';

@Component({
  selector: 'app-cardpaciente',
  templateUrl: './cardpaciente.component.html',
  styleUrls: ['./cardpaciente.component.scss'],
})
export class CardpacienteComponent implements OnInit {

  @Input('data') paciente: Paciente

  constructor() { }

  ngOnInit() {}

}

import { Visita } from './../../Models/Visita';
import { Component, OnInit } from '@angular/core';
import { VisitaService } from 'src/app/services/visita.service';


@Component({
  selector: 'app-showallvisitas',
  templateUrl: './showallvisitas.page.html',
  styleUrls: ['./showallvisitas.page.scss'],
})
export class ShowallvisitasPage implements OnInit {

  visitaList: Visita[] = [];
  constructor( private visitaService: VisitaService  ) { }

  ngOnInit() {
    this.getAllVisitas()
  }

  ionViewDidEnter(){
    this.getAllVisitas()
  }
  getAllVisitas(){
    this.visitaService.getAllVisitas()
      .subscribe(
        res=>{
          this.visitaList = res.data;
          console.log(res)
        },
        err =>console.log(err)
      )
  }


}

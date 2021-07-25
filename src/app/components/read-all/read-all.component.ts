import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  list: Livro[] = [ 
    {
      titulo: "Teste",
      dataParaFinalizar: new Date,
      finalizado: false
    },
    {
      titulo: "Teste 2",
      dataParaFinalizar: new Date,
      finalizado: false
    }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}

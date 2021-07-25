import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-read-all',
  templateUrl: './read-all.component.html',
  styleUrls: ['./read-all.component.css']
})
export class ReadAllComponent implements OnInit {

  closed = 0;

  list: Livro[] = [];
  listFinished: Livro[] = [];

  constructor(private  service: LivroService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe((resposta) => {
      resposta.forEach(livro => {
        if(livro.finalizado) {
          this.listFinished.push(livro);
        } else {
          this.list.push(livro);
        }
      })
      this.closed = this.listFinished.length
    })
  }

}

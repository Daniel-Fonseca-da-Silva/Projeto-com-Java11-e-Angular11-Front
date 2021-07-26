import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private  service: LivroService, private router: Router) { }

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

  delete(id: any):void {
    this.service.delete(id).subscribe((resposta) => {
      if(resposta === null) {
        this.service.message('Task deletada com sucesso!');
        this.list = this.list.filter(livro => livro.id !== id);
      }
    })
  }

  navegarParaFinalizados(): void {
    this.router.navigate(['finalizados']);
  }

}

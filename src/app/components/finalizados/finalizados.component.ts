import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.css']
})
export class FinalizadosComponent implements OnInit {

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
        }
      })
    })
  }

  voltar(): void {
    this.router.navigate(['']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  livro: Livro = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: '',
    finalizado: false
  }
  constructor(private router: Router, private service: LivroService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.formataData();
    this.service.create(this.livro).subscribe((resposta) => {
      this.service.message('Livro criado com sucesso!');
      this.router.navigate(['']);
    }, err => {
      this.service.message('Falha ao criar livro!');
      this.router.navigate(['']);
    })
  }

  cancelar(): void {
    this.router.navigate(['']);
  }

  formataData(): void {
    let data = new Date(this.livro.dataParaFinalizar);
    this.livro.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }

}

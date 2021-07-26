import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Livro } from 'src/app/models/livro';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  livro: Livro = {
    titulo: '',
    descricao: '',
    dataParaFinalizar: '',
    finalizado: false
  }
  constructor(private router: Router, private service: LivroService) { }

  ngOnInit(): void {
  }

  cancelar(): void {
    this.router.navigate(['']);
  }

  formataData(): void {
    let data = new Date(this.livro.dataParaFinalizar);
    this.livro.dataParaFinalizar = `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
  }
}
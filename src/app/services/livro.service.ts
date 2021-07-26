import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from '../models/livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Livro[]> {
    return this.http.get<Livro[]>(this.baseUrl);
  }

  update(livro: Livro): Observable<Livro> {
    const url = `${this.baseUrl}/${livro.id}`
    return this.http.put<Livro>(url, livro);
  }

  delete(id: any):Observable<void> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }

  create(livro: Livro):Observable<Livro> {
    return this.http.post<Livro>(this.baseUrl, livro);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    })
  }

}

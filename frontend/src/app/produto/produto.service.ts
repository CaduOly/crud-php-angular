import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Produto } from '../models/produto.model';
import { Categoria } from '../models/categoria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  produtosApi = 'assets/json/produto.json';
  categoriaApi = 'assets/json/categoria.json';
  apiURL = environment.apiURL;
  constructor(private httpClient: HttpClient) {}

  getProdutos() {
    return this.httpClient.get<Array<Produto>>(`${this.apiURL}produtos`);
  }

  getCategorias() {
    return this.httpClient.get<Array<Categoria>>(`${this.apiURL}categorias`);
  }

  getById(id: number): Observable<Produto> {
    return this.httpClient.get<Produto>(`${this.apiURL}produtos/${id}`);
  }

  getIncluir(request: Produto) {
    return this.httpClient.post<Produto>(`${this.apiURL}produtos`, request);
  }

  getAlterar(id: Number | null, request: Produto) {
    return this.httpClient.put<Produto>(`${this.apiURL}produtos/${id}`, request);
  }

  getDelete(id: Number) {
    return this.httpClient.delete<Produto>(`${this.apiURL}produtos/${id}`);
  }
}

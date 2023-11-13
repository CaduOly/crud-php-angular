import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  categoriaApi = environment.apiURL;
  
  constructor(private httpClient: HttpClient) { }
  
  getCategorias() {
    return this.httpClient.get<Array<Categoria>>(`${this.categoriaApi}categorias`);
  }

  getById(id: number): Observable<Categoria> {
    return this.httpClient.get<Categoria>(`${this.categoriaApi}categorias/${id}`);
  }

  getIncluir(request: Categoria) {
    return this.httpClient.post<Categoria>(`${this.categoriaApi}categorias`, request);
  }

  getAlterar(id: Number | null, request: Categoria) {
    return this.httpClient.put<Categoria>(`${this.categoriaApi}categorias/${id}`, request);
  }

  getDelete(id: Number) {
    return this.httpClient.delete<Categoria>(`${this.categoriaApi}categorias/${id}`);
  }
}

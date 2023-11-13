import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from '../categoria.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categoria-lista',
  templateUrl: './categoria-lista.component.html',
  styleUrls: ['./categoria-lista.component.css'],
  providers: [MessageService, ConfirmationService]

})
export class CategoriaListaComponent {
  title!: string;
  categoria: Categoria = new Categoria();
  categorias: Array<Categoria> = [];
  
  categoriasLazyLoad: Categoria[] = new Array<Categoria>();
  loading: boolean = false;
  totaldeRegistros: number = 0;

  constructor(
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.title = 'Categorias';
    this.loading = true;
    this.getCategorias();
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((response) => {
      this.categorias = response;
      this.categoriasLazyLoad = [...response];
      this.totaldeRegistros = response.length;
    });
  }

  getCategoria(id: number) {
    this.categoriaService.getById(id).subscribe((response) => {
      this.categoria = response;
      return this.categoria.descricao
    });
  }

  onDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Deseja realmente DELETAR essa categoria?',
      header: 'DELETAR',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          key: 'bc',
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Você confirmou a operação!',
        });
        this.categoriaService.getDelete(id).subscribe(
          () => {
            this.messageService.add({
              key: 'bc',
              severity: 'success',
              summary: 'Deletado',
              detail: 'categoria deletado com sucesso!',
            });
            setTimeout(() => {
              return window.location.reload();
            }, 1000);
          },
          (erro) => {
            if (erro.status == 404) {
              this.messageService.add({
                key: 'bc',
                severity: 'error',
                summary: 'Erro 404',
                detail: 'Página não encontrada.',
              });
            } else if (erro.status == 500) {
              this.messageService.add({
                key: 'bc',
                severity: 'error',
                summary: 'Erro 500',
                detail: 'Houve um erro ao carregar ao informações.',
              });
            } else if (erro != null) {
              this.messageService.add({
                key: 'bc',
                severity: 'error',
                summary: 'Erro ao deletar',
                detail:
                  'Estamos enfrentado alguns erros de sistema. Tente novamente mais tarde.',
              });
            }
            console.log(erro);
          }
        );
      },
    });
  }

  loadCustomers(event: any) {
    this.loading = true;
    setTimeout(() => {
      if (this.categorias) {
        let numPrimeiraLinha: number = Number(event.first);
        let numLinhasPagina: number = numPrimeiraLinha + Number(event.rows);
        this.categorias = [
          ...this.categoriasLazyLoad.slice(numPrimeiraLinha, numLinhasPagina),
        ];

        this.loading = false;
      }
    }, 1000);
  }
  lectionChange(value = []) {
    this.categorias = [...value];
  }
}
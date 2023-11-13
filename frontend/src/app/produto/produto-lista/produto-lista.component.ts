import { Component, OnInit } from '@angular/core';
import {
  ConfirmationService,
  LazyLoadEvent,
  MessageService,
  SortEvent,
} from 'primeng/api';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from '../produto.service';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ProdutoListaComponent implements OnInit {
  title = 'Produtos Cadastrados';
  produtos: Produto[] = [];
  produtosLazyLoad: Produto[] = [];

  categorias: Categoria[] = [];

  loading = false;
  totaldeRegistros = 0;

  constructor(
    private produtoService: ProdutoService,
    private categoriaService: CategoriaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.getProdutos();
  }

  getProdutos() {
    this.produtoService.getProdutos().subscribe((response) => {
      this.getCategorias();
      this.produtosLazyLoad = [...response].sort((a, b) => a.id - b.id);
      this.totaldeRegistros = response.length;
    });
  }

  getCategorias() {
    this.categoriaService.getCategorias().subscribe((response) => {
      this.categorias = response;
    });
  }

  getCategoriaDescricao(categoriaId: number): string {
    const categoria = this.categorias.find((c) => c.id === categoriaId);
    return categoria ? categoria.descricao : 'Categoria não encontrada';
  }

  onDelete(id: number) {
    this.confirmationService.confirm({
      message: 'Deseja realmente DELETAR esse produto?',
      header: 'DELETAR',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          key: 'bc',
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Você confirmou a operação!',
        });
        this.produtoService.getDelete(id).subscribe(
          () => {
            this.messageService.add({
              key: 'bc',
              severity: 'success',
              summary: 'Deletado',
              detail: 'produto deletado com sucesso!',
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
    if (this.produtosLazyLoad && this.categorias) {
      setTimeout(() => {
        this.produtos = [...this.produtosLazyLoad];

        this.loading = false;
      }, 1000);
    }
  }
}

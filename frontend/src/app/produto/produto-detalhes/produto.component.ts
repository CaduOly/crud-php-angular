import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from '../produto.service';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ProdutoComponent implements OnInit {
  title = 'Adicionar Produto';

  produto: Produto = new Produto();
  produtos: Array<Produto> = [];

  categorias: Array<Categoria> = [];
  selectedCat!: string;

  produtosLazyLoad: Produto[] = new Array<Produto>();
  loading: boolean = false;

  constructor(
    private produtoService: ProdutoService,

    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    if (id) {
      this.loading = true;
      this.title = 'Alterar produto';
      this.getProduto(id);
    }
    this.getCategorias();
  }

  getProduto(id: number) {
    this.produtoService.getById(id).subscribe((response) => {
      if (response == null) {
        this.title = 'Erro ao encontrar produto';
        this.messageService.add({
          severity: 'error',
          summary: 'Id inexistente:',
          detail: 'Não encontramos o produto',
        });
      }

      this.produto = { ...response };
      if (this.produto && this.categorias) {
        setTimeout(() => {
          this.loading = false;
        }, 1000);
      }
    });
  }

  getCategorias() {
    this.produtoService.getCategorias().subscribe((response) => {
      this.categorias = response;
    });
  }

  getProdutos(): Observable<Produto[]> {
    return this.produtoService.getProdutos();
  }
  getAlterar() {
    this.produtoService.getAlterar(this.produto.id, this.produto).subscribe(
      (response) => {
        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Alteração ',
          detail: 'produto alterado com sucesso!',
        });
        setTimeout(() => {
          this.router.navigate(['/produtos']);
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
            summary: 'Erro de sistema',
            detail:
              'Estamos enfrentado alguns erros de sistema. Tente novamente mais tarde.',
          });
        }
        console.log(erro);
      }
    );
  }

  getIncluir() {
    this.produtoService.getIncluir(this.produto).subscribe(
      (response) => {
        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Inclusão ',
          detail: 'produto adicionado com sucesso!',
        });
        setTimeout(() => {
          this.router.navigate(['/produtos']);
        }, 1000);
      },
      (erro) => {
        if (erro != null) {
          this.messageService.add({
            key: 'bc',
            severity: 'error',
            summary: 'Erro de sistema',
            detail:
              'Estamos enfrentado alguns erros de sistema. Tente novamente mais tarde.',
          });
          console.log(erro);
        }
      }
    );
  }

  getIsEditando() {
    return Boolean(this.produto.id);
  }

  salvar() {
    this.confirmationService.confirm({
      message: 'Deseja SALVAR esse produto?',
      header: 'SALVAR',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({
          key: 'bc',
          severity: 'info',
          summary: 'Confirmado',
          detail: 'Você confirmou a operação!',
        });
        if (this.getIsEditando()) {
          this.getAlterar();
        } else {
          this.getIncluir();
        }
      },

      reject: (type: any) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({
              key: 'bc',
              severity: 'error',
              summary: 'Rejeitado',
              detail: 'Você rejeitou a operação.',
            });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({
              key: 'bc',
              severity: 'warn',
              summary: 'Cancelado',
              detail: 'Você cancelou a operação.',
            });
            break;
        }
      },
    });
  }
}

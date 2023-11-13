import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  ConfirmEventType,
  ConfirmationService,
  MessageService,
} from 'primeng/api';
import { Categoria } from 'src/app/models/categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class CategoriaComponent {
  title = 'Adicionar Categoria';

  categoria: Categoria = new Categoria();
  categorias: Array<Categoria> = [];

  selectedCat!: string;

  categoriasLazyLoad: Categoria[] = new Array<Categoria>();
  loading: boolean = false;

  constructor(
    private categoriaService: CategoriaService,

    private router: Router,
    private route: ActivatedRoute,

    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    const id: number = this.route.snapshot.params['id'];
    if (id) {
      this.loading = true;
      this.title = 'Alterar categoria';
      this.getCategoria(id);
    }
  }

  getCategoria(id: number) {
    this.categoriaService.getById(id).subscribe((response) => {
      if (response == null) {
        this.title = 'Erro ao encontrar categoria';
        this.messageService.add({
          severity: 'error',
          summary: 'Id inexistente:',
          detail: 'Não encontramos o categoria',
        });
      }
      this.categoria = { ...response };
      this.loading = false;
    });
  }

  getAlterar() {
    this.categoriaService
      .getAlterar(this.categoria.id, this.categoria)
      .subscribe(
        (response) => {
          this.messageService.add({
            key: 'bc',
            severity: 'success',
            summary: 'Alteração ',
            detail: 'categoria alterado com sucesso!',
          });
          setTimeout(() => {
            this.router.navigate(['/categorias']);
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
    this.categoriaService.getIncluir(this.categoria).subscribe(
      (response) => {
        this.messageService.add({
          key: 'bc',
          severity: 'success',
          summary: 'Inclusão ',
          detail: 'categoria adicionado com sucesso!',
        });
        setTimeout(() => {
          this.router.navigate(['/categorias']);
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
    return Boolean(this.categoria.id);
  }

  salvar() {
    this.confirmationService.confirm({
      message: 'Deseja SALVAR esse categoria?',
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

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ProdutoComponent } from './produto-detalhes/produto.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';
import { ProdutoRoutingModule } from './produto-routing.module';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { SkeletonModule } from 'primeng/skeleton';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [ProdutoListaComponent, ProdutoComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    FormsModule,

    ButtonModule,
    CardModule,
    CheckboxModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    InputMaskModule,
    InputTextModule,
    MessageModule,
    MessagesModule,
    ToastModule,
    TableModule,
    TagModule,
    SkeletonModule,
  ],
})
export class ProdutoModule {}

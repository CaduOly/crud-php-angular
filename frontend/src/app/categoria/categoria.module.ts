import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

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
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CategoriaComponent } from './categoria-detalhes/categoria.component';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaRoutingModule } from './categoria-routing.module';


@NgModule({
  declarations: [
    CategoriaListaComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ToastModule,
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
    SkeletonModule,
  ],
})
export class CategoriaModule {}

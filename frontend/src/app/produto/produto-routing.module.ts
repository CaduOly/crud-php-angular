import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoComponent } from './produto-detalhes/produto.component';
import { ProdutoListaComponent } from './produto-lista/produto-lista.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoListaComponent,
  },
  {
    path: 'novo',
    component: ProdutoComponent,
  },
  {
    path: ':id',
    component: ProdutoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }

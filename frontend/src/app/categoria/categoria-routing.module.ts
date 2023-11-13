import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaListaComponent } from './categoria-lista/categoria-lista.component';
import { CategoriaComponent } from './categoria-detalhes/categoria.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriaListaComponent,
  },
  {
    path: 'novo',
    component: CategoriaComponent,
  },
  {
    path: ':id',
    component: CategoriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }

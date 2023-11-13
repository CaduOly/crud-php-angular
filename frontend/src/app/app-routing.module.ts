import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaModule } from './categoria/categoria.module';
import { Pagina404Component } from './pagina404/pagina404.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => ProdutoModule,
  },
  {
    path: 'produtos',
    loadChildren: () => ProdutoModule,
  },
  {
    path: 'categorias',
    loadChildren: () => CategoriaModule,
  },
  {
    path: '**',
    component: Pagina404Component, 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

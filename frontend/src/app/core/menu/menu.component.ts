import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  exibirSide = false;
  items!: MenuItem[];
  itemMenu!: MenuItem[];

  constructor(private router: Router) {
    this.getItensMenu();
  }

  getItensMenu() {
    this.itemMenu = [
      {
        label:'Gerenciador de Produtos'
      },
      {
        label: 'Produtos',
        items: [
          {
            label: 'Adicionar',
            command: () => (this.goTo('produtos/novo')),
          },
          {
            label: 'Lista',
            command: () => (this.goTo('produtos')),
          },
        ],
      },
      {
        label: 'Categorias',
        items: [
          {
            label: 'Adicionar',
            command:() => (this.goTo('categorias/novo')),
          },
          {
            label: 'Lista',
            command: () => (this.goTo('categorias')),
          },
        ],
      },
    ];
  }

  goTo(destino: string) {
    this.exibirSide = false
    this.router.navigate([`${destino}`]);
  }  
}

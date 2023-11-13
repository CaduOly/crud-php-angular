# App-teste-uitec

Este é um projeto Front-end em Angular que implementa uma API para gerenciamento de projeto.

### Requisitos da Aplicação

Antes de começar, certifique-se de que você possui o seguinte instalado:

1. **Node.js e npm**: Certifique-se de ter o [Node.js](https://nodejs.org/en/docs) e o [NPM](https://docs.npmjs.com/about-npm) instalados na máquina.
2. **Git (Opcional)**: Se você deseja clonar o repositório do projeto, certifique-se de ter o Git instalado. Você pode encontrar as instruções [aqui](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
3. **cmd**: Navegue até o diretório do projeto no terminal.
4. **Instalar dependências**: Execute `npm install` para instalar as dependências.
5. **Iniciar**: Execute `ng serve` para iniciar o servidor de desenvolvimento acesso padrão em **http://localhost:4200/**.

## Estrutura do Projeto

O projeto segue a seguinte estrutura de diretórios seguindo as boas práticas do Angular:

```plaintext
/app-teste-uitec
|-- /src
    |-- /app
        |-- /categoria
            |-- categoria-detalhes
                |-- categoria.component.css
                |-- categoria.component.html
                |-- categoria.component.ts
            |-- categoria-lista
                |-- categoria-lista.component.css
                |-- categoria-lista.component.html
                |-- categoria-lista.component.ts
            |-- categoria.module.ts
            |-- categoria.service.ts
        |-- /core
            |-- menu
                |-- menu.component.css
                |-- menu.component.html
                |-- menu.component.ts
            |-- core.module.ts
        |-- /models
            |-- categoria.ts
            |-- produto.ts
        |-- /pagina404
        |-- /produto
            |-- produto-detalhes
                |-- produto.component.css
                |-- produto.component.html
                |-- produto.component.ts
            |-- produto-lista
                |-- produto-lista.component.css
                |-- produto-lista.component.html
                |-- produto-lista.component.ts
            |-- produto-routing.module.ts
            |-- produto.module.ts
            |-- produto.service.ts
        |-- app-routing.module.ts
        |-- app.component.css
        |-- app.component.html
        |-- app.component.ts
        |-- app.module.ts
|-- /assets
|-- /enviroment
|-- index.html
|-- main.ts
|-- styles.css
|-- angular.json
|-- package.json
|-- README.md

```
**Rotas de Acesso:**

As rotas de acesso são definidas no arquivo `app-routing.module.ts`. As principais rotas são:

- `/categorias`: Lista de categorias.
- `/categorias/novo`: Adição de nova categoria.
- `/categorias/:id`: Detalhes ou edição de uma categoria específica.

- `/produtos`: Lista de produtos.
- `/produtos/novo`: Adição de novo produto.
- `/produtos/:id`: Detalhes ou edição de um produto específico.

**Dependências Usadas:**

- Angular (Core, Forms, Router, etc.)
- PrimeNG (primeflex, primeicons, primeng)
- RxJS
- Zone.js
- TypeScript
- Jasmine, Karma (para testes)
- Entre outras dependências listadas no arquivo `package.json`.

Divirta-se codificando! 🚀

Desenvolvido por [Carllos Eduardo de Oliveira](https://github.com/CaduOly/)

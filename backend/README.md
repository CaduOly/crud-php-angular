# api-teste-uitec

Este projeto php e Laravel oferece uma API para o gerenciamento de produtos. O projeto contém um Docker Compose na pasta `db` que permite executar o banco de dados para conectar-se ao back-end, proporcionando um ambiente pronto para uso.

### Requisitos da Aplicação

Antes de começar, certifique-se de que você possui o seguinte instalado:

  1. **Docker e Docker Compose:** Vá na pasta `db` e configure a Docker.

  2. **php:** A aplicação é construída com php. Certifique-se de ter o php instalado em sua máquina. Você pode baixá-lo [aqui](https://www.php.net/downloads.php).

  3. **Git (Opcional):** Se você deseja clonar o repositório do projeto, certifique-se de ter o Git instalado. Você pode encontrar as instruções [aqui](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

Após garantir que esses requisitos estão atendidos, você estará pronto para iniciar a aplicação.

## Estrutura do Projeto

O projeto segue a estrutura de diretórios criada pelo Laravel:

```plaintext
backend/
|-- app/
|   |-- Console/
|   |-- Exceptions/
|   |-- Http/
|   |   |-- Controllers/
|   |   |-- Middleware/
|   |-- Models/
|-- bootstrap/
|-- config/
|-- database/
|   |-- factories/
|   |-- migrations/
|   |-- seeders/
|-- public/
|-- resources/
|   |-- css/
|   |-- js/
|   |-- lang/
|   |-- views/
|-- routes/
|-- storage/
|   |-- app/
|   |-- framework/
|   |-- logs/
|   |-- ...
|-- tests/
|-- vendor/
|-- .env
|-- .env.example
|-- artisan
|-- composer.json
|-- composer.lock
|-- phpunit.xml
|-- server.php
|-- webpack.mix.js
|-- ...

```

### Inicialização do Projeto

Para iniciar o projeto e executar a aplicação, siga os passos abaixo:

1. **Configuração do Ambiente:**

   Antes de tudo, é necessário configurar o ambiente. Abra o arquivo `.env` na raiz do projeto e ajuste as configurações conforme necessário. Certifique-se de definir corretamente os detalhes do banco de dados, como nome do banco, usuário e senha. *Usando o container Docker não precisará configurar o `.env`.* 

2. **Execução do Docker Compose:**

   Navegue até a pasta `db` e execute o seguinte comando para iniciar o Docker Compose, que configurará o banco de dados para você:

   ```bash
   cd db
   docker-compose up -d
   ```

   Isso iniciará os serviços necessários, como o banco de dados, em segundo plano.

3. **Instalação das Dependências:**

   Volte para a raiz do projeto e execute o seguinte comando para instalar as dependências do Laravel:

   ```bash
   composer install
   ```

4. **Geração da Chave de Aplicação:**

   Execute o seguinte comando para gerar a chave de aplicação:

   ```bash
   php artisan key:generate
   ```

5. **Execução das Migrações e Seeders:**

   Aplique as migrações para criar as tabelas do banco de dados:

   ```bash
   php artisan migrate
   ```

Assim, as tabelas no banco de dados serão criadas juntamente com 4 objetos de exemplo. Esses objetos servirão para testar as funcionalidades do sistema e verificar se os dados estão sendo armazenados corretamente. 

6. **Execução da Aplicação:**

   Agora, você está pronto para iniciar o servidor de desenvolvimento. Execute o seguinte comando:

   ```bash
   php artisan serve
   ```

   Acesse a aplicação em seu navegador usando o endereço [http://localhost:8000](http://localhost:8000).

Agora, o projeto está configurado e em execução. Sinta-se à vontade para explorar a API para gerenciamento de produtos. 

**Observação:** Certifique-se de que as portas necessárias estejam disponíveis em sua máquina, e nenhum outro serviço esteja utilizando essas portas antes de iniciar o Docker Compose.

Se encontrar algum problema durante a inicialização, verifique as mensagens de erro nos logs do Docker Compose e no console para obter informações mais detalhadas sobre qualquer problema que possa ocorrer.

## Exemplos de Requisições

### Códigos de Status

- **200 OK:** A solicitação foi bem-sucedida. O servidor retornará os dados solicitados.
- **201 Created:** A solicitação foi bem-sucedida, e um novo recurso foi criado como resultado.
- **404 Not Found:** O recurso solicitado não foi encontrado no servidor.
- **500 Internal Server Error:** Um erro interno no servidor impediu que a solicitação fosse concluída.

### Corpos de Solicitação

#### Categoria

| Parâmetro   | Tipo     | Descrição                                                   |
| ----------- | -------- | ----------------------------------------------------------- |
| `descricao` | `string` | **Obrigatório**. Descrição da categoria.                     |

- **Obter Todas as Categorias:** Retorna uma lista de todas as categorias cadastradas na API.
  - **Método:** `GET`
  - **Endpoint:** `/categorias`
  - **Código de Status Esperado:** `200 OK`

- **Obter Categoria por ID:** Retorna os detalhes de uma categoria específica, dado o seu ID.
  - **Método:** `GET`
  - **Endpoint:** `/categorias/{id}`
  - **Código de Status Esperado:** `200 OK` se a categoria existir, `404 Not Found` se não existir

- **Criar Categoria:** Cria uma nova categoria com a descrição informada no corpo da solicitação.
  - **Método:** `POST`
  - **Endpoint:** `/categorias`
  - **Corpo da Solicitação:**
    ```json
    {
        "descricao": "Eletrônicos"
    }
    ```
  - **Código de Status Esperado:** `201 Created`

- **Atualizar Categoria:** Atualiza a descrição de uma categoria existente, dado o seu ID e a nova descrição no corpo da solicitação.
  - **Método:** `PUT`
  - **Endpoint:** `/categorias/{id}`
  - **Corpo da Solicitação:**
    ```json
    {
        "descricao": "Nova Descrição"
    }
    ```
  - **Código de Status Esperado:** `200 OK`

- **Excluir Categoria:** Exclui uma categoria existente, dado o seu ID.
  - **Método:** `DELETE`
  - **Endpoint:** `/categorias/{id}`
  - **Código de Status Esperado:** `200 OK`

#### Produto

| Parâmetro           | Tipo     | Descrição                                                           |
| ------------------- | -------- | ------------------------------------------------------------------- |
| `nome`              | `string` | **Obrigatório**. Nome do produto.                                  |
| `categoria_id`      | `integer`| **Obrigatório**. ID da categoria à qual o produto pertence.        |
| `valor`             | `float`  | **Obrigatório**. Valor do produto.                                |
| `vencimento`        | `date`   | Data de vencimento do produto (opcional).                         |
| `quantidade_estoque`| `integer`| **Obrigatório**. Quantidade em estoque do produto.                 |
| `perecivel`         | `boolean`| Indica se o produto é perecível (opcional).                       |

- **Obter Todos os Produtos:** Retorna uma lista de todos os produtos cadastrados na API, com seus respectivos dados e categoria.
  - **Método:** `GET`
  - **Endpoint:** `/produtos`
  - **Código de Status Esperado:** `200 OK`

- **Obter Produto por ID:** Retorna os detalhes de um produto específico, dado o seu ID.
  - **Método:** `GET`
  - **Endpoint:** `/produtos/{id}`
  - **Código de Status Esperado:** `200 OK` se o produto existir, `404 Not Found` se não existir

- **Criar Produto:** Cria um novo produto com os dados informados no corpo da solicitação. A categoria do produto deve ser uma das existentes na API.
  - **Método:** `POST`
  - **Endpoint:** `/produtos`
  - **Corpo da Solicitação:**
    ```json
    {
        "nome": "Smartphone",
        "categoria_id": 1,
        "valor": 799.99,
        "vencimento": "2023-12-31",
        "quantidade_estoque": 50,
        "perecivel": false
    }
    ```
  - **Código de Status Esperado:** `201 Created`

- **Atualizar Produto:** Atualiza os dados de um produto existente, dado o seu ID e os novos dados no corpo da solicitação. A categoria do produto deve ser uma das existentes na API.
  - **Método:** `PUT`
  - **Endpoint:** `/produtos/{id}`
  - **Corpo da Solicitação:**
    ```json
    {
        "nome": "Novo Nome",
        "valor": 899.99,
        "quantidade_estoque": 60
    }
    ```
  - **Código de Status Esperado:** `200 OK`

- **Excluir Produto:** Exclui um produto existente, dado o seu ID.
  - **Método:** `DELETE`
  - **Endpoint:** `/produtos/{id}`
  - **Código de Status Esperado:** `200 OK`

Desenvolvido por [Carllos Eduardo de Oliveira](https://github.com/CaduOly/)
# Banco de dados

Aqui temos o arquivo `docker-compose.yml` que configura um serviço PostgreSQL em um contêiner Docker para uso no projeto `teste_ui`.

### Instruções

1. **Docker e Docker Compose:** Para maior facilidade, certifique-se de ter o Docker e o Docker Compose instalados em sua máquina. Você pode encontrar instruções de instalação em [docker](https://docs.docker.com/get-docker/) e em [docker-compose](https://docs.docker.com/compose/install/).

2. Abra `docker-compose.yml` que está no diretório `db` do projeto.

3. No mesmo diretório, temos um arquivo chamado `init.sql` para fornecer comandos SQL para inicialização do banco de dados. Este arquivo será executado automaticamente quando o contêiner do PostgreSQL for iniciado.

4. Abra um terminal, vá para o diretório onde está o `docker-compose.yml` e execute o seguinte comando para iniciar o contêiner:

```bash
docker-compose up -d
```

Pronto seu banco de dados está funcionando e proto para uso com o backend!

### Parâmetros do PostgreSQL

- **POSTGRES_DB**: O nome do banco de dados que será criado automaticamente.
- **POSTGRES_USER**: O nome do usuário que terá acesso ao banco de dados.
- **POSTGRES_PASSWORD**: A senha associada ao usuário.

### Acesso ao PostgreSQL

- **Host**: `localhost`
- **Porta**: `5432`
- **Nome do Banco de Dados**: `teste_ui`
- **Nome do Usuário**: `postgres`
- **Senha**: `root`

Desenvolvido por [Carllos Eduardo de Oliveira](https://github.com/CaduOly/) 👨🏾‍💻🚀
# Verzel API

Este teste foi enviado pela empresa Verzel para avaliar os conhecimentos técnicos em desenvolvimento frontend, backend na linguagem Javascript usando as seguintes tecnologias `NodeJS` & `ReactJS`.

## :dart: Objetivo

Desenvolver um sistema com catálogo de aulas por módulos.

## Exemplo do funcionamento das rotas

- users - /api/v1/users
- modules - /api/v1/modules
- lessons - /api/v1/lessons

# Funcionalidades

Os recursos funcionais da aplicação são:

- Criação, autenticação de usuário
- Criação, listagem, edição e deleção dos módulos
- Criação, listagem, edição e deleção dos aulas

- Listagem das aulas e módulos em ordem alfabética.
- Validação dos campos antes da inserção

# Modelagem da base de dados

- Cria um banco de dados no postgres com o nome `"db_verzel"`
- Coloca as configuração do teu Postgres no arquivo `ormconfig.json`

```
{
  "port": "sua porta" ,
  "username": "seu usuário",
  "password": "sua senha",
}

```

- Execute o seguinte comando para criar as migrations.

```
  yarn typeorm migration:run
```

# :computer: Instalação

```bash
# Clone este repositório
$ git clone https://github.com/herlanderbento/verzelChallenge-backend.git

# Entre na pasta
$ cd verzelChallenge-backend

# Instale as dependências
$ yarn ou yarn install

# Execute este comando para criar as migrations
 yarn typeorm migration:run

# Execute a aplicação em modo de desenvolvimento
$ yarn dev

# O servidor inciará na porta:3333
acesse <http://localhost:3333/api/v1>
```

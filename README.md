# API Neopro

Desafio técnico de back-end da Neopro.

## Rodando a aplicação

No diretório do projeto, você deve executar:

### `docker-compose up -d --build`
Para construir e iniciar todos os containers.

A API estará disponível em [http://localhost:3001](http://localhost:3001).

Também é possível acessar um painel de administrador do mongodb em [http://localhost:8081](http://localhost:8081).

## Endpoints

### `POST /sales?month=2022-09-01T00:00:00.000Z`
Popula o banco de dados com as vendas do mês passado por parâmetro.

### `GET /sales?month=2022-09-01T00:00:00.000Z`
Retorna as vendas do mês passado por parâmetro.

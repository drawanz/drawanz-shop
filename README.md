# Projeto Car Shop

O projeto tem como objetivo desenvolver uma API C.R.U.D para uma loja de carros. A aplicação foi desenvolvida utilizando o Typescript como linguagem principal e o Mongoose para acessar o banco de dados (MongoDb).

## Como rodar o projeto
  - Clone este repositório;
  - Rode o comando `npm install`;
  - Suba os containers(Node + MongoDb) da aplicação com o comando `docker compose up -d`;
  - Entre no container `car_shop` com o seguinte comando: `docker exec -it car_shop bash`;
  - Dentro do container, rode: `npm run dev`;
  - Use as requisições CRUD descritas na seção de documentação.

## Documentação

  A rota utilizada na aplicação será essa: `http://localhost:3001/cars`
  - Para leitura de todos os dados:
    - Realize a requisição à rota com o método `GET`.
    - Retorno esperado: [
  {
    "_id": "4edd40c86762e0fb12000003",
    "model": "Ferrari Maranello",
    "year": 1963,
    "color": "red",
    "buyValue": 3500000,
    "doorsQty": 2,
    "seatsQty": 2
  }
  ]

  - Para leitura de um dado específico acesse `/:id`:
    - Realize a requisição à rota com o método `GET`.
    - Retorno esperado: [
  {
    "_id": "4edd40c86762e0fb12000003",
    "model": "Ferrari Maranello",
    "year": 1963,
    "color": "red",
    "buyValue": 3500000,
    "doorsQty": 2,
    "seatsQty": 2
  }
  ]

  - Para adicionar dados:
    - Realize a requisição à rota com o método `POST`.
    - O body da requisição precisará ter uma estrutura semelhante a essa: [
    {
      "model": "Ferrari Maranello",
      "year": 1963,
      "color": "red",
      "buyValue": 3500000,
      "doorsQty": 2,
      "seatsQty": 2
    }
    ]
    - Retorno esperado: [
    {
      "_id": "4edd40c86762e0fb12000003",
      "model": "Ferrari Maranello",
      "year": 1963,
      "color": "red",
      "buyValue": 3500000,
      "doorsQty": 2,
      "seatsQty": 2
    }
    ]

  - Para realizar o update de dados acesse `/:id`:
    - Realize a requisição à rota com o método `PUT`.
    - O body da requisição precisará ter uma estrutura semelhante a essa: [
      {
        "model": "Ferrari Maranello",
        "year": 1963,
        "color": "red",
        "buyValue": 3500000,
        "doorsQty": 2,
        "seatsQty": 2
      }
    ]
    - Retorno esperado: [
    {
      "_id": "4edd40c86762e0fb12000003",
      "model": "Ferrari Maranello",
      "year": 1963,
      "color": "red",
      "buyValue": 3500000,
      "doorsQty": 2,
      "seatsQty": 2
    }
    ]

  - Para deletar um dado específico acesse `/:id`:
    - Realize a requisição à rota com o método `DELETE`.
    - Retorno esperado: Apenas um status OK.


## Ferramentas utilizadas

  - Node.js;
  - TypeScript;
  - Express;
  - Mongoose;
  - Docker;
  - MongoDb;
  - Mocha;
  - Chai;


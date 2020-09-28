


# DESAFIO2-NODEJS

## Visão geral
Desafio2-nodeJS é um servidor para gerenciamento de listagem de repositórios.

O código é uma resolução do desafio 2 módulo 1 do curso Bootcamp da Rocketseat para aplicação dos conhecimentos inicias sobre nodeJS, em especial os metodos HTTP, roteamento, e tipos de parâmetros em uma requisição.

O desafio é composto pela construção de um simples servidor com a biblioteca express, que fornece serviços de CRUD de listagem de repositórios contendo titulo, url, tecnologias e número de likes computados, retornando os dados no formato JSON. Nesse módulo ainda não foi trabalhado o uso de DB's, tendo seu dados armazenados apenas em memória RAM.

### Funcionalidades
- adição de um  repositório na listagem.
- alteração de um  repositório da listagem.
- listagem dos repositórios da listagem.
- remoção de um repositório da listagem.
- adição de um like a um repositório.


### Bibliotecas utilizadas
- express: utilizada para criação de um servidor.
- uuidv4: utilizado para criação de id's aleatórios.
- jest: utilizado para testes unitários na aplicação.
- supertest: utilizado para testes da aplicação.
- nodemon: utilizado para inicialização e monitoramento de alterações nos arquivos de código.
- cors: utilizado para configurar acessos de outros domínios ao servidor.

## Instalação do servidor em uma máquina local
	
### 1. Requisitos para instalação
- NodeJS na versão 8 ou superior;
- yarn ou npm;
- curl, postman ou insomnia.

### 2. Download do projeto

Clonar a pasta do projeto para sua máquina local e instalar as dependências.
```bash
 # clonar o repositório
 $ git clone https://github.com/marciovz/desafio2-conceitos-node.git
 
 # acessar a pasta backend
 $ cd desafio2-conceitos-node
 
 # instalar as dependências do projeto
 $ yarn
```
### 3. Rodando o servidor
```bash
$ yarn dev
```

## Usando os serviços

Abaixo temos as linhas de comandos para fazer as requisições através dos comandos curl em seu terminal, mas você também pode utilizar um aplicativo como postman ou insomnia para executar as requisições ao servidor.

 ### Criar um repositório
```bash
$ curl -H "Content-Type: application/json" -X POST -d '{"title": "desafio2-node", "url": "https://github.com/marciovz/desafio2-conceitos-node", "techs": ["nodeJS"]}' http://localhost:3333/repositories
```
 ### Listar todos repositórios
```bash
$ curl -H "Content-Type: application/json" -X GET http://localhost:3333/repositories
```
 ### Alterar um repositório
>  obs.: troque o id por um id válido.
```bash
$ curl -H "Content-Type: application/json" -X PUT -d '{"techs": ["nodeJS", "javascript"]}' http://localhost:3333/repositories/PUT-ID
```

 ### Remover um repositório
>  obs.: troque o id por um id válido.
```bash
$ curl -H "Content-Type: application/json" -X DELETE  http://localhost:3333/repositories/PUT-ID
```

 ### Adicionar um like a um repositório
>  obs.: troque o id por um id válido.
```bash
$ curl -H "Content-Type: application/json" -X POST  http://localhost:3333/repositories/PUT-ID/like
```


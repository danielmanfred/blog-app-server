# Blog App Server

## Sobre o projeto

O backend foi construído em Node.js e baseada na arquitetura de Microsserviços.

O projeto do backend possui 3 pequenas aplicações: 

1. API Gateway - Ponto de acesso aos microsserviços
2. User Microservice - Microsserviço para as funcionalidades de usuário e autenticação
3. Post Microservice - Microsserviço para as funcionalidades da entidade post

Tecnologias utilizadas neste projeto:

01. Node.js - Runtime Javascript no lado do servidor
02. Express - Framework Node.js
03. MongoDB - Banco de dados NoSQL do tipo documento
04. Mongoose - ODM (Object Data Model) para MongoDB e Node.js
05. Axios - HTTP Client baseada em Promise utilizada para acessar os microsserviços
06. JWT - Padrão usado para gerar e decodificar tokens
07. Bcrypt - Biblioteca usada para encriptografar senhas em algoritmo hash
08. Mlab - Serviço de Banco de dados MongoDB hospeados na núvem
09. Google Cloud - Serviço de Hospedagem do banco de dados no Mlab 
10. Babel - Compilador Javascript utilizado para o uso do Ecmascript 6

## Passos para rodar este backend na tua máquina

Como já foi dito anteriormente, este projeto possui 3 aplicação, uma API Gateway mais dois microsserviços.


## Rotas

### Endpoints para a coleção de usuários

URL                   |  HTTP(Método)  |      Descrição            |       Parâmetros          |
----------------------|--------------- | --------------------------| --------------------------|
/users/               |    GET         | Selecionar todos usuários |                           |
/users/:id            |    GET         | Selecionar usuário pelo ID|                           |
/users/               |    POST        | Cadastrar usuário         | username, email, password |
/users/:id            |    PUT         | Atualizar usuário pelo ID | username, email           |
/users/:id            |    DELETE      | Remover usuário pelo ID   |                           |

### Endpoits de autenticação

URL                   |     HTTP(Método)  |      Descrição                    |    Parâmetros      |
----------------------| ----------------- | --------------------------------- | ------------------ | 
/auth/decodeToken     |       GET         | Decodificador do token do usuário |                    |
/auth/signin          |       POST        | Autenticação do usuário           | username, password |

## Endpoints para a coleção de posts

URL                   |  HTTP(Método)  |      Descrição          |       Parâmetros                        |
----------------------|--------------- | ------------------------| ----------------------------------------|
/posts/               |    GET         | Selecionar todos posts  |                                         |
/posts/:id            |    GET         | Selecionar post pelo ID |                                         |
/posts/               |    POST        | Cadastrar post          | title, subtitle, content, image, author |
/posts/:id            |    PUT         | Atualizar post pelo ID  | title, subtitle, content, image, author |
/posts/:id            |    DELETE      | Remover post pelo ID    |                                         |

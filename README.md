# Blog App Server

## Sobre o projeto

O backend foi construído em Node.js e baseada na arquitetura de Microsserviços.

O projeto do backend possui 3 pequenas aplicações: 

1. API Gateway - Ponto de acesso aos microsserviços
2. User Microservice - Microsserviço para as funcionalidades de usuário e autenticação
3. Post Microservice - Microsserviço para as funcionalidades de postagens de conteúdo

### Tecnologias utilizadas neste projeto:

01. Node.js - Runtime Javascript no lado do servidor
02. Express - Framework Node.js
03. MongoDB - Banco de dados NoSQL do tipo documento
04. Mongoose - Framework ODM (Object Data Model) para o uso do MongoDB com o Node.js
05. Axios - HTTP Client baseada em Promise utilizada para acessar os microsserviços
06. JWT - Padrão usado para gerar e decodificar tokens
07. Bcrypt - Biblioteca usada para encriptografar senhas em algoritmo hash
08. Mlab - Serviço de Banco de dados MongoDB hospeados na núvem
09. Google Cloud - Serviço de Hospedagem do banco de dados no Mlab 
10. Babel - Compilador Javascript utilizado para o uso do Ecmascript 6

## Passos para rodar este backend na tua máquina

### Clonando o projeto do Github

1. - Abra o prompt de comando (cmd no caso do Windows)
2. - Escolha um diretório adequado no seu computador para armazenar o projeto
3. - Clone o projeto: git clone https://github.com/danielmanfred/blog-app-server.git

Para rodar este projeto na tua máquina será necessário ativar os servidores node da API Gateway e também dos dois microsserviços. 

Os passos para rodas as 3 aplicações são bastante idênticas.

### Rodando o microsserviço 'users'

1. - Entre no diretório do microsserviço users: cd users
2. - Instale todas as dependências do microsserviço: npm install
3. - Rode o microsserviço: npm start

### Rodando o microsserviço 'posts'

1. - Entre no diretório do microsserviço posts: cd posts
2. - Instale todas as dependências do microsserviço: npm install
3. - Rode o microsserviço: npm start

### Rodando a API Gateway

1. - Entre no diretório da API Gateway: cd api-gateway
2. - Instale todas as dependências da API Gateway: npm install
3. - Rode a API Gateway: npm start

## Rotas

### Endpoints para a coleção de usuários

URL                   |  HTTP(Método)  |      Descrição            |       Parâmetros          |
----------------------|--------------- | --------------------------| --------------------------|
/users/               |    GET         | Selecionar todos usuários |                           |
/users/:id            |    GET         | Selecionar usuário pelo ID|                           |
/users/               |    POST        | Cadastrar usuário         | username, email, password |
/users/:id            |    PUT         | Atualizar usuário pelo ID | username, email           |
/users/:id            |    DELETE      | Remover usuário pelo ID   |                           |

### Endpoits de autenticação do usuário

URL                   |     HTTP(Método)  |      Descrição                    |    Parâmetros      |
----------------------| ----------------- | --------------------------------- | ------------------ | 
/auth/decodeToken     |       GET         | Decodificador do token do usuário |                    |
/auth/signin          |       POST        | Autenticação do usuário           | username, password |

## Endpoints para a coleção de posts

URL                   |  HTTP(Método)  |      Descrição          |       Parâmetros                |
----------------------|--------------- | ------------------------| --------------------------------|
/posts/               |    GET         | Selecionar todos posts  |                                 |
/posts/:id            |    GET         | Selecionar post pelo ID |                                 |
/posts/               |    POST        | Cadastrar post          | title, subtitle, content, image |
/posts/:id            |    PUT         | Atualizar post pelo ID  | title, subtitle, content, image |
/posts/:id            |    DELETE      | Remover post pelo ID    |                                 |

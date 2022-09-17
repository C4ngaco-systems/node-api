# API NODE MUNDO TACI

> Api implentada para servir de base para o desenvolvimento do projeto mundo taci,
com intuito de acelerar o desenvolvimento do client que será o frontend desenvolvido em ReactJs.

> Aos poucos também a api será implentada em java para a entrega final do projeto.

### Ajustes e melhorias

O projeto ainda está em desenvolvimento e as próximas atualizações serão voltadas nas seguintes tarefas:

- [x] setup básico do projeto
- [x] autenticação

## 🛠 Tecnologias      
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" align="center" width="25" height="25" /> JavaScript

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" align="center" width="25" height="25" /> Node.js          

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" align="center" width="25" height="25" /> Express.js

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" align="center" width="25" height="25" /> MySQL
    
## 💻 Pré-requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

* Você tem instalado o`nodejs`.
* Você tem uma instância ativa do `mysql` com password o "black-magic" para o usuário root
* Você tem um banco com o nome `mundo_taci`

## 🚀 Instalando

Para instalar a api do mundo taci, siga estas etapas:

```sh
# clonar o repositório
# via https
git clone https://github.com/C4ngaco-systems/node-api.git
# ou se preferir via ssh
git clone git@github.com:C4ngaco-systems/node-api.git
# entrar na pasta do api
cd node-api
# instalar as dependências
npm i
# inicializar a api
npm start
```

Deverás receber um output similar no console:

```sh
> api@1.0.0 start
> nodemon index.js

[nodemon] 2.0.19
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Server is running on port 4000
Executing (default): SELECT 1+1 AS result
Executing (default): SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE' AND TABLE_NAME = 'Users' AND TABLE_SCHEMA = 'mundo_taci'
Connection has been established successfully.
```

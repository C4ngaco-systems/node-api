# node-api

API for the Mundo Taci project

## 🛠 Tecnologias      
<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" align="center" width="30" height="30" /> Javascript

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" align="center" width="30" height="30" /> ExpressJS

## Instruções

### 1° Configurar Database mysql

- Inicializar um banco de dados mysql
- Setar o password `black-magic` para o usuário root da db
- O password também pode ser setado em uma variável de ambiente `MYSQL_ROOT_PASSWORD=black-magic`
- Se estiver utilizando docker podera rodar o comando abaixo para criar a db
- `docker run --name mysql -e MYSQL_ROOT_PASSWORD=black-magic -d mysql:latest`
- Criar um banco com o nome `mundo_taci` podes criar da forma que preferir, poderás usar o comando abaixo na CLI do mysql
- `CREATE DATABASE mundo_taci`

### 2° Configurar a api

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
**Checar console contra possíveis erros!**





REST API para o desafio do +A Educação

## início
O desafio foi feito em uma máquina Linux. Para isso foi adicionado o Docker ao projeto para manter a compatibilidade e a facilidade de executar a aplicação. Como parte das especificações foi utilizado: NodeJS, Vue.js e Postgres.

## Construir e executar aplicação
```bash
$ docker-compose build backend
$ ...
$ Successfully tagged challenge-full-stack-web_backend:latest
$ docker-compose up -d 
$ Starting gachallenge_db  ... done
$ Starting gachallenge_vue ... done
$ Starting gachallenge_service ... done
```
## Acesso
Acesse no navegador: localhost:8000

## Autenticação
Como plus foi feito um esquema básico de autenticação de usuário utilizando token. Utilize as informações abaixo.  
email: admin@email.com  
senha: 123456

## Interface Web
Como requisito do desafio, a interface web foi feita em Vue.js. Na aplicação foi utilizado rotas. A arquitetura da solução consiste em uma rota pra a página de login e outra para o container da aplicação. O componente da view da "Home" contém sub rotas e é nesse "container" que são renderizados os componentes que fazem parte das "views". Essa rota da aplicação é protegida por uma condição simples que verifica se existe token armazenado.
### Dependências 
- [Vue Material](https://vuematerial.io/)
- [crypto-js](https://www.npmjs.com/package/crypto-js)
- [vue-router](https://router.vuejs.org/)

## REST API
Como requisito do desafio foi feita em NodeJS + Express.
### Dependências
 - [express](https://expressjs.com/pt-br/)
 - [express-jwt](https://www.npmjs.com/package/express-jwt)
 - [pg](https://node-postgres.com/)
 - [cors](http://expressjs.com/en/resources/middleware/cors.html)

## Melhorias e requisitos obrigatórios
- Melhorias:  
Eu queria melhorar a qualidade do código nos componentes utilziando Vue.js. Queria conseguir separar mais a lógica de negócio do template da view, como é a primeira vez que desenvolvo um projeto em Vue.js não tive tempo de melhorar essa parte.
- Requisitos obrigatórios:  
Não utilizei o [Vuetify](https://vuetifyjs.com/en/). Comecei a estudar o Vue.js e ao mesmo tempo fazer a interface web do projeto, pesquisei algum framework que implementasse o Material Design e assim utilizei o [Vue Material](https://vuematerial.io/). Basicamente cumpre o mesmo papel. Se precisar eu faço uma revisão no projeto para migrar para o Vuetify.

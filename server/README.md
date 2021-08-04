REST API para o desafio do +A Educação

## início
O desafio foi feito em uma máquina Linux para usar no ambiente Unix. Para isso adicionei o Docker para manter a compatibilidade e a facilidade de executar a aplicação.

## Construir e executar aplicação
```bash
$ docker-compose build server
$ ...
$ Successfully tagged challenge-full-stack-web_vue:latest
$ docker-compose up -d 
$ Starting gachallenge_db  ... done
$ Starting gachallenge_vue ... done
$ Starting gachallenge_service ... done
```
## Acesso
Acesse no navegador: localhost:8080

## Autenticação
Como plus eu fiz um esquema básico de autenticação de usuário  
email: admin@email.com  
senha: 123456

## Criando um novo aluno
Clique no botão "Cadastrar Aluno", preencha os campos obrigatórios (Nome,CPF e Registro Acadêmico) e clique em Salvar.
# Task Calendar dio challenge!

## Tecnologias

## Back-end
* Node.js
* Typescript
* POO
* Express.js
* Sequelize.js
* Mysql2
* Nodemon

## Front-end
* Javascript
* React
* Context API
* React Hooks
* Axios

## Como usar


No seu terminal digite:
```
git clone git@github.com:Rodolfomno/task-calendar-challenge.git

cd task-calendar-challenge
```
## Inicializando a aplicação

Já na pasta raiz do projeto use o comando:

```
docker-compose up
```

Após terminar, acesse o link

[http://localhost:3000/](http://localhost:3000/)


## API Endpoints
A aplicação contem os seguintes endpoints:

| Method | Description |
|---|---|
| `GET - localhost:3001/tasks` | Retorna todas as tarefas. |
| `GET - localhost:3001/tasks/:id` | retorna task através do id params. |
| `GET - localhost:3001/tasks/search` | Retorna tarefa por titulo atraves de uma query. |
| `POST - localhost:3001/tasks` | Cria uma nova tarefa. |
| `PUT - localhost:3001/tasks` | Atualiza uma tarefa existente |
| `DELETE - localhost:3001/tasks/:id` | Deleta uam tarefa. |




const express = require("express");
const cors = require("cors");
const { uuid } = require('uuidv4');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

/** Rota para listar todos os repositórios */
app.get("/repositories", (request, response) => {
  return response.status(200).json(repositories);
});

/** Rota para criar um novo repositório */
app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  const newRepo = { id: uuid(), title, url, techs, likes: 0 };

  repositories.push(newRepo);

  return response.status(200).json(newRepo);
});

/** Rota para alterar um campo de uma determinada rota */
app.put("/repositories/:id", (request, response) => {
  const { id } = request.params;
  const { title, url, techs } = request.body;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
    return response.status(400).json({ error: 'Repository not found!'});
  }

  const repository = {
    id,
    title,
    url,
    techs,
    likes: repositories[repoIndex].likes,
  }

  repositories[repoIndex] = repository;

  return response.status(200).json(repository);

});

/** Rota para deletar um repositório */
app.delete("/repositories/:id", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
    return response.status(400).json({ error: 'Repository not found!'});
  }

  repositories.splice(repoIndex, 1);

  return response.status(204).send();
});

/** Rota para incrementar o número de likes em um repositório */
app.post("/repositories/:id/like", (request, response) => {
  const { id } = request.params;

  const repoIndex = repositories.findIndex(repo => repo.id === id);

  if (repoIndex < 0) {
    return response.status(400).json({ error: 'Repository not found!'});
  }
  
  repositories[repoIndex].likes++;

  return response.status(200).json(repositories[repoIndex]);
});

module.exports = app;

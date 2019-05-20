const express = require('express');
const routes = express.Router();

const AlunoController =  require('../src/controller/AlunoController')

routes.get('/alunos', AlunoController.index)
routes.get('/relatorios', AlunoController.index)
routes.get('/aluno/:id', AlunoController.show)
routes.post('/aluno', AlunoController.store)
routes.post('/relatorio', AlunoController.store)


module.exports = routes;
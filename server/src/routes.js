const express = require('express');
const routes = express.Router();

const AlunoController =  require('../src/controller/AlunoController')
const RelatorioController =  require('../src/controller/RelatorioController')

routes.get('/alunos', AlunoController.index)
routes.get('/aluno/:id', AlunoController.show)
routes.post('/aluno', AlunoController.store)
routes.delete('/aluno/:id', AlunoController.remove)

routes.get('/relatorios', RelatorioController.index)
routes.get('/relatorio/:id', RelatorioController.show)
routes.post('/relatorio', RelatorioController.store)
routes.delete('/relatorio/:id', RelatorioController.remove)


module.exports = routes;
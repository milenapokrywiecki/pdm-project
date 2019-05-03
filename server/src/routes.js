const express = require('express');
const routes = express.Router();

const AlunoController =  require('../src/controller/AlunoController')

routes.get('/alunos', AlunoController.index)
routes.get('/aluno/:id', AlunoController.show)
routes.post('/aluno', AlunoController.store)
//routes.put('/aluno/:id', AlunoController.update)
routes.delete('/aluno/:id', AlunoController.destroy)


module.exports = routes;
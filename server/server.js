const express = require('express');
//const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

const api = express();
api.use(express.json());
//api.use(cors())

//conexao banco de dados
mongoose
  .connect(
    'mongodb+srv://milena:mi123@projectmilena-zxb6v.mongodb.net/test?retryWrites=true',
    {
      useNewUrlParser: true
    })
    .then(() => console.log('MongoDB Connected'))
 .catch(err => console.log(err));

requireDir('./src/models')

// Rotas
api.use('/api', require('./src/routes'));


api.listen(3001);
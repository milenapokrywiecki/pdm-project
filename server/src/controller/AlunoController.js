const mongoose = require('mongoose');

const Aluno = mongoose.model('Aluno');

module.exports = {
    async index(req, res) { //listar tudo
        const { page = 1 } = req.query;
        const alunos = await Aluno.paginate({}, { page, limit: 10 });
//        const alunos = await Aluno.find();

        return res.json(alunos);
    },
    async show(req, res) { //listar
        const aluno = await Aluno.findById(req.params.id);//parametro é o id

        return res.json(aluno);
    },

    async store(req, res) { //criar
        const aluno = await Aluno.create(req.body);

        return res.json(aluno);
    },

    async destroy(req, res) { //remover
        await Aluno.findByIdAndRemove(req.params.id);

        return res.send();
    }
}
const mongoose = require('mongoose');
const Relatorio = mongoose.model('Relatorio');


module.exports = {
    async index(req, res) { //listar todos os relatorios
        const { page = 1 } = req.query;
        const relatorios = await Relatorio.paginate({}, { page, limit: 10 })

        return res.json(relatorios);
    },

    async show(req, res) { //listar
        const relatorio = await Relatorio.findById(req.params.id);//parametro é o id

        return res.json(relatorio);
    },

    async store(req, res) { //criar relatorio
        const relatorio = await Relatorio.create(req.body);

        return res.json(relatorio);
    },

    async remove(req, res) {
        await Relatorio.findByIdAndRemove(req.params.id);

        return res.send();
    }
}
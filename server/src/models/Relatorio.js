const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const RelatorioSchema = new mongoose.Schema({
    relatorio: {
        type: String,
        required: true
    }
})

RelatorioSchema.plugin(mongoosePaginate)

mongoose.model('Relatorio', RelatorioSchema)
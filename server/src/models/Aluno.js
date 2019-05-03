const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const bcrypt = require('bcryptjs')

const AlunoSchema = new mongoose.Schema({
    nomeA: {
        type: String,
        required: true,
    },
    eemail: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    sexo: { 
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

AlunoSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.senha, 10)
    this.senha = hash

    next();
})

AlunoSchema.plugin(mongoosePaginate)

mongoose.model('Aluno', AlunoSchema)
const mongoose = require('mongoose');
const{ faculdadesSchema } = require('./faculdades')

const alunosSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    cpf: { type: String, required: true },
    faculdade: [faculdadesSchema]
}, {
    versionKey: false
});

const alunosModel = mongoose.model('alunos', alunosSchema)

module.exports = {
    alunosModel,
    alunosSchema
}

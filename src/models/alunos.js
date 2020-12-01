const mongoose = require('mongoose');

const alunosSchema = new mongoose.Schema({
    nome: { type: String },
    email: { type: String },
    cpf: { type: String, required: true },
    idFaculdade: { type: String, required: true},
    grauEscolaridade: { type: String },
    curso: { type: String },
}, {
    versionKey: false
});

const alunos = mongoose.model('alunos', alunosSchema)

module.exports = alunos;

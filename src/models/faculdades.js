const mongoose = require('mongoose');
const faculdadesSchema = new mongoose.Schema({
    faculdade: { type: String },
    idFaculdade: { type: String, required: true},
    nomeAluno: { type: String, required: true },
    matriculado: { type: Boolean, required: true}
}, {
    versionKey: false
});

const alunos = mongoose.model('faculdades', faculdadesSchema)

module.exports = faculdades;
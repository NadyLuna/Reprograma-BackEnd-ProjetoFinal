const mongoose = require('mongoose');
const faculdadesSchema = new mongoose.Schema({

    idFaculdade: { type: String, required: true},
    faculdade: { type: String },    
    nomeAluno: { type: String, required: true },
    matriculado: { type: Boolean, required: true}
}, {
    versionKey: false
});

const alunos = mongoose.model('faculdades', faculdadesSchema)

module.exports = faculdades;
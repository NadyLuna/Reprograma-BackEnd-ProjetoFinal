const mongoose = require('mongoose');
const {alunosSchema} = require('./alunos')
const faculdadesSchema = new mongoose.Schema({

    idFaculdade: { type: mongoose.Schema.Types.ObjectId, auto: true, required: true },
    codigo: { type: String},
    nomeFaculdade: { type: String },
    nomeAluno: { type: String},
    cpf: { type: String },
    matriculado: { type: Boolean},
    alunos: [alunosSchema]    
    
}, {
    versionKey: false
});

const faculdadesModel = mongoose.model('faculdades', faculdadesSchema)

module.exports = {
    faculdadesModel,
    faculdadesSchema
}
    

    

    
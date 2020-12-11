const mongoose = require('mongoose');
const {alunosSchema} = require('./alunos')
const faculdadesSchema = new mongoose.Schema({

    codigo: { type: String},
    nomeFaculdade: { type: String },
    nomeAluno: { type: String},
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
    

    

    
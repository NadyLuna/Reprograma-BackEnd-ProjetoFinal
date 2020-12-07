const mongoose = require('mongoose');
const {alunosSchema} = require ('../models/alunos')

const faculdadesSchema = new mongoose.Schema({

    idFaculdade: { type: String, required: true},
    faculdade: { type: String },  
    aluno: [alunosSchema]  
    
}, {
    versionKey: false
});

const faculdades = mongoose.model('faculdades', faculdadesSchema)

module.exports = faculdades
    

    

    
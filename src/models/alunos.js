const mongoose = require('mongoose');
const { isEmail } = require('validator');
const{ faculdadesSchema } = require('./faculdades')

const alunosSchema = new mongoose.Schema({
    
    idaluno: { type: Number},
    email: { type: String,lowercase: true,required: true, validate: [isEmail, 'Email inválido'], unique: true },
    senha: { type: Number,lowercase: true,required: true},
    faculdade: [faculdadesSchema]
}, {
    versionKey: false
});

const alunosModel = mongoose.model('alunos', alunosSchema)

module.exports = {
    alunosModel,
    alunosSchema
}

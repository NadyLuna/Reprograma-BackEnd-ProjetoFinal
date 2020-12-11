const mongoose = require('mongoose');
const { isEmail } = require('validator');


const alunosSchema = new mongoose.Schema({

    email: { type: String,lowercase: true,required: true, validate: [isEmail, 'Email inválido'], unique: true },
    senha: { type: Number,lowercase: true,required: true},
    cpf: { type: String }
}, {
    versionKey: false
});

const alunosModel = mongoose.model('alunos', alunosSchema)

module.exports = {
    alunosModel,
    alunosSchema
}

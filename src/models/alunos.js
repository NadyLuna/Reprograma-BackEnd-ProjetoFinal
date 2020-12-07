const mongoose = require('mongoose');
const alunosSchema = new mongoose.Schema({
    
    nome: { type: String },
    email: { type: String },
    cpf: { type: String, required: true },
    matriculado: { type: String, required: true}  
}, {
    versionKey: false
});

const alunosModel = mongoose.model('alunos', alunosSchema)

module.exports = {
    alunosModel,
    alunosSchema
}

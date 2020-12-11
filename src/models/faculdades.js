const mongoose = require('mongoose');

const faculdadesSchema = new mongoose.Schema({

    idfaculdade: { type: Number },
    codigo: { type: String},
    nomefaculdade: { type: String },
    nomealuno: { type: String},
    cpf: { type: String },
    matriculado: { type: Boolean},
        
    
}, {
    versionKey: false
});

const faculdadesModel = mongoose.model('faculdades', faculdadesSchema)

module.exports = {
    faculdadesModel,
    faculdadesSchema
}
    

    

    
const mongoose = require('mongoose');

const faculdadesSchema = new mongoose.Schema({
    idFaculdade: { type: String },
    nomefaculdade: { type: String },
    matriculado: { type: String},
        
    
}, {
    versionKey: false
});

const faculdadesModel = mongoose.model('faculdades', faculdadesSchema)

module.exports = {
    faculdadesModel,
    faculdadesSchema
}
    

    

    
const alunos = require('../models/alunos')


const readAll = (req, res) => {
    alunos.find(function (err, aluno) {
        if (err) {
            return res.status(424).send({message: err.message})
        } else {
            return res.status(200).send(aluno)
        }
    })
}

const readid = (req, res) => {
    const cpf = req.params.cpf 
    alunos.find({cpf:cpf},(err, aluno) => { 
        if(err) {   return res.status(424).send({message: err.message})
    } else {
        return res.status(200).send(aluno)
    }
})       
}


const create = (req, res) => {
    
    let aluno = new alunos(req.body)
    aluno.save(function (err) {

        if (err) {
            return res.status(424).send({message: err.message})
        } else {
            return res.status(201).send({ message: "aluno incluído com sucesso",})
        }
    })
}

const update = (req, res) => {
    const cpf = req.params.cpf;
    alunos.updateOne({ cpf }, {$set: req.body}, {upsert: true}, function (err) {
        if (err) {
            return res.status(500).send({message: err.message});
        } else {
            return res.status(200).send({message: "Aluno atualizado com sucesso"});
        }
    });
}

module.exports = {
    readAll,
    create,
    update,
    readid
}

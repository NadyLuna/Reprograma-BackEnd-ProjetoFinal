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


module.exports = {
    readAll,
    create
}

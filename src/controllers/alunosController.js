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

module.exports = {
    readAll
}

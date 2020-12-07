
const {faculdadesModel} = require('../models/faculdades')

const create = (req, res) => {
    const newfaculdade = new faculdadesModel(req.body)
    newfaculdade.save(function (err) {
        if (err) {
            return res.status(424).send({message: err.message})
        } else {
            return res.status(201).send({ message: "Faculdade incluída com sucesso",})
        }
    })
}

const SelectAll = (req, res) => {
    faculdadesModel.find(function (err, faculdade) {
                if (err) {
            return res.status(424).send({message: err.message})
        } else {
            return res.status(200).send(faculdade)
        }
    })
}







module.exports = {
    create,
    SelectAll
}





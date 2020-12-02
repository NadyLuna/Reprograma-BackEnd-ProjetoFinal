const faculdades = require('../models/faculdades')

const create = (req, res) => {
    
    let faculdade = new faculdades(req.body)
    faculdade.save(function (err) {
        if (err) {
            return res.status(424).send({message: err.message})
        } else {
            return res.status(201).send({ message: "Faculdade incluída com sucesso",})
        }
    })
}

module.exports = {
    create
}
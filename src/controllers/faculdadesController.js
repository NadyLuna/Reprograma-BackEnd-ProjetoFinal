
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

const SelectById = (req, res) => {
    const id = req.params.id;

    faculdadesModel.find({ _id: id }, (err, faculdade) => {

        if (err) {
            return res.status(424).send({ message: err.message});

        } else if (faculdade.length > 0) {
            return res.status(200).send(faculdade);

        } else {
            return res.status(404).send({ message: "Faculdade não encontrada com este ID.",
            });
        };
    });
};

const updateFaculdade = (req, res) => {
    const id = req.params.id;
    faculdadesModel.find({ _id: id}, (err, facul) => {
    
        if( facul > 0 ) {

            return res.status(404).send("Não há faculdade com este ID para ser atualizada");
        }else {
            faculdadesModel.updateOne({ _id: id}, {$set: req.body}, function (err){

                if(err) {
                return res.status(500).send({message: err.message});
            }
                return res.status(200).send({message: "Faculdade atualizada com sucesso"});
            });        
        };
    });
};

const deleteFaculdade = (req, res) => {
    const id = req.params.idFaculdade;
    faculdadesModel.find({idFaculdade}, (err, faculdade) => {
        if (faculdade.length > 0) {
            faculdadesModel.deleteMany({Idfaculdade}, (err) => {
                if(err) {
                return res.status(424).send({message: err.message})
            }   
                return res.status(200).send({status: true, mensagem: "Faculdade excluída com Sucesso", });
            });

                } else {
                return res.status(404).send("Faculdade não encontrada");
        }
    });
};

module.exports = {
    create,
    SelectAll,
    SelectById,
    updateFaculdade,
    deleteFaculdade

}





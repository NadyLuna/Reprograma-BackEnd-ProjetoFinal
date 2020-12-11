const {faculdadesModel} = require('../models/faculdades')
const {alunosModel} = require("../models/alunos");

const createFaculdade = (req, res) => {  
    const newFaculdade = new faculdadesModel({
    codigo: req.body.codigo,
    nomeFaculdade: req.body.nomeFaculdade,
    nomeAluno: req.body.nomeAluno,
    matriculado: req.body.matriculado,
    alunos: req.body.alunos.map(aluno => {
        const studant = new alunosModel({
            email: aluno.email,
            senha: aluno.senha,
            cpf: aluno.cpf,
        });
        studant.save(err => {
            if (err) {
            return res.status(424).send({ message: err.message });
            };        
        }); 
        return studant;     
        })
    });   
    newFaculdade.save(err => {
        if (err) {
        return res.status(424).send({ message: err.message });
        };
        return res.status(201).send({message: 'Faculdade Cadastrada com Sucesso!'});
    });  
};


const selectAllFaculdades = (req, res) => {
    faculdadesModel.find((error, faculdade) => {
        if (error) {
        return res.status(500).send(error)
        }
  
        return res.status(200).send(faculdade)
    })
  }


const selectById = (req, res) => {
    const id = req.params.id;

    faculdadesModel.find({_id: id}, (err, faculdade) => {

        if (err) {
            return res.status(424).send({ message: err.message});

        } else if (faculdade.length > 0) {
            return res.status(200).send(faculdade);

        } else {
            return res.status(404).send({ message: "Não existe Faculdade com este Id.",
            });
        };
    });
};


const updateFaculdadeById = (req, res) => {
    const id = req.params.id;

    faculdadesModel.findOne({_id: id}, (err, facul) => {
    
        if( facul.length> 0 ) {
            return res.status(404).send("Não há faculdade com este ID para ser atualizada");
        }else {
            faculdadesModel.updateOne({ _id: id}, {$set: req.body}, function (err){

                if(err) {
                return res.status(500).send({message: err.message});
            }
                return res.status(200).send({message: "Faculdade atualizada com sucesso", status: true});
            });        
        };
    });
};

const deleteFaculdadeById = (req, res) => {
    const id = req.params.id;

    faculdadesModel.find({_id:id}, (err, faculdade) => {

        if (faculdade.length > 0) {

            faculdadesModel.deleteMany({_id: id}, (err) => {
                if(err) {
                return res.status(424).send({message: err.message})
            }   
                return res.status(200).send({ mensagem: "Faculdade excluída com Sucesso",status: true });
            });

                } else {
                return res.status(404).send("Faculdade não encontrada");
        }
    });
};

module.exports = {
    createFaculdade,
    selectAllFaculdades,
    selectById,
    updateFaculdadeById,
    deleteFaculdadeById

}







const {alunosModel} = require('../models/alunos')
const{ faculdadesModel} = require('../models/faculdades')

//const bcrypt = require('bcryptjs')
//const jwt = require('jsonwebtoken')

const insertStudant = (req, res) => {  
    const newStudant = new alunosModel({
        nome:  req.body.nome,
        email: req.body.email,
        cpf: req.body.cpf,
        faculdade: req.body.faculdade.map(facul => {
        const colege = new faculdadesModel({
        Idfaculdade: facul.Idfaculdade,
        nomefaculdade: facul.nomefaculdade,
        matriculado: facul.matriculado,
        });
        colege.save(err => {
        if (err) {
            return res.status(424).send({ message: err.message });
    };
});
    return facul;
    })
}); 
    newStudant.save(err => {
        if (err) {
        return res.status(424).send({ message: err.message });
        };
        return res.status(201).send(newStudant);
    });  
};

const selectAll = (req, res) => {
    alunosModel.find((err, alunos) => {
                if (err) {
            return res.status(424).send({
                message: err.message
            })
        } else {
            return res.status(200).send(alunos)
        }
    })
}


const selectById = (req, res) => {
    const cpf = req.params.cpf
    alunosModel.find(cpf, (err, aluno) => {
        if (err) {

            return res.status(424).send({message: err.message})

        } else if (aluno.length > 0) {            
            return res.status(200).send(aluno)
        }else{
        return res.status(404).send({message: "Aluno atualizado com sucesso"})
        }
    })
}


const updateStudant = (req, res) => {
    const cpf = req.params.cpf;

        alunosModel.find({cpf}, (err,alunos) => {
        if(alunos.length > 0){
            return res.status(404).send("Não registros com esse cpf para serem atualizados");
        }else{
            alunosModel.updateOne({cpf}, {$set: req.body}, {upsert: true}, function (err) {
                if (err) {
                    return res.status(500).send({message: err.message});
                }
                    return res.status(200).send({message: "Aluno atualizado com sucesso"});
            })        
        }
    });
};

    

const deleteStudant = (req, res) => {
    const cpf = req.params.cpf;
    alunosModel.find({cpf}, (err, alunos) => {
        if (alunos.length > 0) {
        alunosModel.deleteOne({cpf}, (err) => {
                if (err) {
                return res.status(500).send({message: err.message});        
    };
                return res.status(200).send({status: true, mensagem: "aluno excluído com sucesso",})            
        });

                } else {
                return res.status(404).send({message: "Aluno não encontrado"});
        
        };
    });
};

module.exports = {
    selectAll,
    selectById,
    insertStudant,
    updateStudant,
    deleteStudant
}
const {alunosModel} = require("../models/alunos");

const insertStudant = (req, res) => {  

    alunosModel.findOne({email:req.body.email}, function(err,email) {

        if (email){ res.status(404).send(`aluno já cadastrado, faça seu login.`);  
        } else {
    const newStudant = new alunosModel(req.body)           
    newStudant.save(err => {
        if (err) {
        return res.status(424).send({ message: err.message });
        };
        return res.status(201).send(newStudant);
            }); 
        } 
    })
};     


const selectAll = (req, res) => {
    alunosModel.find((err, alunos) => {
        if (err) {
            return res.status(424).send({ message: err.message,});
        } else {
            return res.status(200).send(alunos);
        }
    });
};


const selectAlunoById = (req, res) => {
    const cpf = req.params.cpf;

    alunosModel.findOne({cpf}, (err, alunos) => {
        if (!alunos) {            
            return res.status(424).send({message:'Aluno não cadastrado com este id'});
        } else if (err) { 
            return res.status(500).send({message: err.message});
        } else {
            return res.status(200).send({alunos})
        }
    })
};

const updateStudantById = (req, res) => {
    const cpf = req.params.cpf;

    alunosModel.findOne({cpf}, (err, alunos) => {
    
        if( alunos.length > 0 ) {
            return res.status(404).send("Não há alunos(a) com este cpf para ser atualizada");
        }else {
            alunosModel.updateOne({cpf}, {$set: req.body}, function (err){

                if(err) {
                return res.status(500).send({message: err.message});
            }
                return res.status(200).send({message: "Aluno(a) atualizado(a) com sucesso", status: true});
            });        
        };
    });
};

const updateSenhaById = (req, res) => {
    const cpf = req.params.cpf;

    alunosModel.findOne({cpf}, (err, senha) => {
        console.log(senha.length) 
        if( senha.length > 0 ){
            return res.status(404).send("Não há alunos(a) com este cpf, favor colocar cpf válido ou cadastrar");
        }else {
            alunosModel.updateOne({cpf}, {$set: req.body}, function (err){

                if(err) {
                return res.status(500).send({message: err.message});
            }
                return res.status(200).send({message: "Senha atualizada com sucesso", status: true});
            });        
        };
    });
};

 
const deleteStudant = (req, res) => {
    const cpf = req.params.cpf;
    alunosModel.find({cpf}, (err, alunos) => {
        if (alunos.length > 0) {
            alunosModel.deleteOne({ cpf}, (err) => {
                if (err) {
                    return res.status(500).send({message: err.message});
                }
                return res.status(200).send({ mensagem: "aluno excluído com sucesso", status: true });
            });
        } else {
            return res.status(404).send({message: "Aluno não encontrado" });
        }
    });
};

module.exports = {
    selectAll,
    selectAlunoById,
    insertStudant,
    updateStudantById,
    updateSenhaById,
    deleteStudant
}
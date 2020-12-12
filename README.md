<h1 align="center">
 
 <p align="center">
  <kbd>
    <img width="600" style="border-radius: 5px" height="300" src="https://imgur.com/9MhsZYN.gif" alt="Intro">
  </kbd>

</h1>

 
 <p align="center"> Emissão de Carteira de Estudante Universitária de forma prática e confiável.</p>
 
<p align="center">
<img src="https://img.shields.io/github/issues/NadyLuna/Reprograma-BackEnd-ProjetoFinal">
 <img src="https://img.shields.io/github/forks/NadyLuna/Reprograma-BackEnd-ProjetoFinal" >  
 <img src="https://img.shields.io/github/stars/NadyLuna/Reprograma-BackEnd-ProjetoFinal" > </p>


 <h3 align="center"> 
	🚧  Carteira de Estudante Fácil 🚀 Em construção...  🚧
</h3>

_____

### Brief Overvienw

  A ideia é dimirir as dificuldades para emissão de carteira d e estudante para universitários. Sem a necessidade de emissão de declarações, declarações não aceitas, inclusive. Sobretudo, dirimir as fraudes na emissão de carteira de estudante.

  A Faculdade se encarregará de enviar os seu dados e dos seus alunose enviará para o estudante os dados de acesso a app, onde o mesmo terá que mudar a senha no seu primeiro acesso. Em seguida poderá verificar se está matriculado no período letivo e solicitar a carteira de estudade.
 
### :checkered_flag: Features 

- Cadastro de faculdade/alunos
   - Cadastrar Faculdades e respectivos alunos através de IdFaculdade e e-mail e senha para alunos.

- Atualizar dados Faculdade/alunos
   - Atualizar dados de Faculdade e alunos através de IdFaculdade e CPF aluno.

- Deletar dados Faculdade/alunose
   - Deletar Faculdade e alunos através de IdFaculdade e CPF aluno.

- Check  
   - Checar se o aluno está matriculado e apto a solicitar carteira de estudante.

#### Back-end requirements
 
| Rotas                                   |  Descrição
| --------------------------------------- | --------------------------------------------|
| GET/alunos                              | Listar todos os alunos                      |
| GET/faculdade                           | listar todas as faculdades                  |
| GET/alunos/cpf                          | localizar aluno específico                  |
| GET/faculdades/idFaculdade              | localizar Faculdade específica              |
| GET/faculdades/alunos/matriculados      | localizar alunos matriculados               |
| GET/faculdades/alunos/pending           | localizar alunos Não matriculados           |
| POST/faculdades/alunos                  | Cadastrar nova Faculdade e alunos           |
| POST/alunos                             | Cadastrar novo aluno                        |
| PUT/faculdades/idFaculdade              | Alterar dados da Faculdade                  |
| PUT/alunos/cpf                          | Alterar dados do aluno                      |
| PATCH/alunos/senha/cpf                  | Alterar senha do aluno                      |
| DELETE/alunos/cpf                       | Excluir aluno                               |
| DELETE/faculdades/idFaculdade           | Excluir faculdade                           |


## **Install instructions**

### Getting Started

#### - Clone & Install Dependencies
1 - `Git clone https://github.com/NadyLuna/Reprograma-BackEnd-ProjetoFinal.git`  
2- Instalar dependências NPM packages with `npm install`  
2.1-  Dependencies used   
- [x] [dotenv-safe 8.2.0](https://https://www.npmjs.com/package/dotenv-safe)  
- [x] [express 4.17.1](https://https://expressjs.com/pt-br/)  
- [x] [mongoose 5.10.17](https://https://mongoosejs.com/docs/)  
- [x] [nodemon 2.0.6](https://https://www.npmjs.com/package/nodemon)
- [x] [validator 13.5.2](https://www.npmjs.com/package/validator)

3- Execute `npm start`

4 -  Verificar o arquivo `.env.example` quais as variáveis de ambiente necessárias;
```
* .env.example (Variáveis de ambiente necessárias)

MONGODB_URL=string_de_conexao_banco_de_dados
SECRET=chave_secreta
PORT=porta
```

- Conectar ao [MongoAtlas](https://www.mongodb.com/cloud/atlas); Para criar ou utilizar um Cluster e inserir a String de Conexão no app.js. a `URL do MONGO_URL` fica "guardada" no `.env`conforme demonstrado no `.env.example`.

``` 
* String de conexão com Mongo Atlas
   
mongoose.connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true,      
    useUnifiedTopology: true
    });
```
#### - Deploy 
![Heroku](https://img.shields.io/badge/Heroku-430098?align=style=flat-square&logo=heroku&logoColor=white)

<a href="https://finalproject-reprograma.herokuapp.com/"><button style="background: #2365; border-radius: 1px; padding: 5px; cursor: pointer; color: #fff; border: none; font-size: 8px;">Acesse</button></a>  


#### - Language, Software and Database

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)  ![Nodejs](https://img.shields.io/badge/NodeJs-339933.svg?style=flat-square&logo=node.js&logoColor=white)  ![MongoDB](https://img.shields.io/badge/MongoDB-444444.svg?style=flat-square&logo=mongoDB&logoColor=green)

#### - Code Editing
- [x] [Visual Code Studio](https://https://code.visualstudio.com/) 

#### - Running tests

- [x] [Postman](https://www.postman.com/)
  **Note:** Pode utilizar o Localhost pelo `http://localhost/3000/` ou pelo endereço do Heroku <a href="https://finalproject-reprograma.herokuapp.com/">Deploy</a>
</p>

### :handshake: **Contributing**

 Este Projeto é para fins de estudo através do Projeto [{Reprograma}](https://reprograma.com.br/) com apoio do Projeto M.I.N.As do Porto Digital Recife. 
 
 Fique a vontade em contribuir! Me mostre e me ensine o que você sabe!

 Todo o tipo de contribuição será bem vindo!

 -   🐛Encontrar e relatar problemas;
 -   📥 Envie PRs para ajudar a resolver problemas ou adicionar recursos.  
   **Note** Crie  uma branch para realizar as alterações : `git checkout -b feature/nome-da-sua-branch`

 

### Useful information

1- Fechar [porta](https://medium.com/@daniloassis.ti/como-finalizar-um-processo-em-aberto-no-windows-525652152902) em uso ou saber quais estão sendo utilizadas;

2- Problemas com a  [DNS](https://use.opendns.com/) no computador;


#### Licença

Este projeto está sob a licença [MIT](./LICENSE.md).


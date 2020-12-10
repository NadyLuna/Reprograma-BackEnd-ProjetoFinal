<h1 align="center">
 
 <p>
    <img src="img/CarteiraEstudante.jpg "align="center" width="300px" > 
    <br> </br>
    <p style = "font-family:Copperplate Gothic;">Fácil </p>
</p>

</h1>


 
 
 <p align="center"> Emissão de Carteira de Estudante Universitária de forma prática e confiável.</p>
 
<p align="center">
<img src="https://img.shields.io/github/issues/NadyLuna/Reprograma-BackEnd-ProjetoFinal">
 <img src="https://img.shields.io/github/forks/NadyLuna/Reprograma-BackEnd-ProjetoFinal" >  
 <img src="https://img.shields.io/github/stars/NadyLuna/Reprograma-BackEnd-ProjetoFinal" > </p>


 <h4 align="center"> 
	🚧  Carteira de Estudante Fácil 🚀 Em construção...  🚧
</h4>


_____
### Features :checkered_flag:
- Cadastro de faculdade
   - Cadastrar Faculdades participantes na aplicação através de login e senha

- Cadastrar alunos
   - Cadastrar alunos a partir de login e senha

- Check  
   - Checar se o aluno está matriculado e apto a solicitar carteira de estudante.



## **Install instructions**

### Getting Started

#### - Clone & Install Dependencies
1 - `Git clone https://github.com/NadyLuna/Reprograma-BackEnd-ProjetoFinal.git`  
2- Instalar dependências NPM packages whith `npm install`  
2.1-  Dependencies used   
- [x] [dotenv-safe 8.2.0](https://https://www.npmjs.com/package/dotenv-safe)  
- [x] [express 4.17.1](https://https://expressjs.com/pt-br/)  
- [x] [mongoose 5.10.17](https://https://mongoosejs.com/docs/)   
- [x] [nodemon 2.0.6](https://https://www.npmjs.com/package/nodemon)

3- Execute `npm start`

4 -  Verificar o arquivo `.env.example` quais as variáveis de ambiente necessárias;
```
* .env.example (Variáveis de ambiente necess)

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

<a href="https://finalproject-reprograma.herokuapp.com/"><button style="background: #2365; border-radius: 1px; padding: 5px; cursor: pointer; color: #fff; border: none; font-size: 8px;">Clique aqui</button></a>  


#### - Language, Software and Database

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)  ![Nodejs](https://img.shields.io/badge/NodeJs-339933.svg?style=flat-square&logo=node.js&logoColor=white)  ![MongoDB](https://img.shields.io/badge/MongoDB-444444.svg?style=flat-square&logo=mongoDB&logoColor=green)

#### - Code Editing
- [x] [Visual Code Studio](https://https://code.visualstudio.com/) 

#### - Running tests

- [x] [Postman](https://www.postman.com/)
  **Note:** Pode utilizar o Localhost pelo `http://localhost/3000/` ou pelo Heroku <a href="#Deploy">Deploy</a>
</p>

## :handshake: **Contributing**

 Este Projeto é para fins de estudo. Fique a vontade em contribuir! Me mostre e me ensine o que você sabe!

 Todo o tipo de contribuição será bem vindo!

 -   🐛Encontrar e relatar problemas;
 -   📥 Envie PRs para ajudar a resolver problemas ou adicionar recursos

 

### Useful information

1- Fechar [porta](https://medium.com/@daniloassis.ti/como-finalizar-um-processo-em-aberto-no-windows-525652152902) em uso ou saber quais estão sendo utilizadas;

2- Problemas com a  [DNS](https://use.opendns.com/) no computador;




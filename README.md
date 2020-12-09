<h1 align="center"> Carteira de Estudante Fácil </h1>

 <p>
    <img src="img/CarteiraEstudante.jpg" align="center" width="300px" > 
    <br> </br>
</p>

## Basic overview
 
 
 <p align="center"> Emissão de Carteira de Estudante Universitária de forma prática e confiável.</p>
 

 <p align="center"><img src=https://img.shields.io/github/issues/NadyLuna/Reprograma-BackEnd-ProjetoFinal  


 <p align="center"><img src= https://img.shields.io/github/forks/NadyLuna/Reprograma-BackEnd-ProjetoFinal  
 
 <p align="center"><img src= https://img.shields.io/github/stars/NadyLuna/Reprograma-BackEnd-ProjetoFinal  
 /></p>

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

### Deploy
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Heroku icon</title><path d="M20.61 0H3.39C2.189 0 1.23.96 1.23 2.16v19.681c0 1.198.959 2.159 2.16 2.159h17.22c1.2 0 2.159-.961 2.159-2.159V2.16C22.77.96 21.811 0 20.61 0zm.96 21.841c0 .539-.421.96-.96.96H3.39c-.54 0-.96-.421-.96-.96V2.16c0-.54.42-.961.96-.961h17.22c.539 0 .96.421.96.961v19.681zM6.63 20.399L9.33 18l-2.7-2.4v4.799zm9.72-9.719c-.479-.48-1.379-1.08-2.879-1.08-1.621 0-3.301.421-4.5.84V3.6h-2.4v10.38l1.68-.78s2.76-1.26 5.16-1.26c1.2 0 1.5.66 1.5 1.26v7.2h2.4v-7.2c.059-.179.059-1.501-.961-2.52zM13.17 7.5h2.4c1.08-1.26 1.62-2.521 1.8-3.9h-2.399c-.241 1.379-.841 2.64-1.801 3.9z"/></svg>



### Language, Software and Database

![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript)  ![Nodejs](https://img.shields.io/badge/NodeJs-339933.svg?logo=node.js&logoColor=white)  ![MongoDB](https://img.shields.io/badge/MongoDB-444444.svg?logo=mongoDB&logoColor=green)
#### Dependences Dev

 - [x] [nodemon 2.0.6](https://https://www.npmjs.com/package/nodemon)

#### Dependences
- [x] [dotenv-safe 8.2.0](https://https://www.npmjs.com/package/dotenv-safe)  
- [x] [express 4.17.1](https://https://expressjs.com/pt-br/)  
- [x] [mongoose 5.10.17](https://https://mongoosejs.com/docs/)  

#### Code Editing
- [x] [Visual Code Studio](https://https://code.visualstudio.com/) 

#### Running tests

- [x] [Postman](https://www.postman.com/) - Os testes da API pode ser feita postman para todas as rotas: GET, POST, PUT, PATCH e DELETE.
### __Boot__ 

- Executar `git clone` ou fork no repositório no github; 

```
- Link do Git Hub

https://github.com/NadyLuna/Reprograma-BackEnd-ProjetoFinal.git
```

- Executar  ```npm install``` no terminal para instalar as dependências; Neste caso como se trata de um projeto existente o npm install fará a instalação das dependências. 

```
- Terminal do gitbash ou Visal Code

nadye@LAPTOP-U84EJJBI MINGW64 ~/Desktop/Reprograma-BackEnd/3-entregasSemana/Reprograma-BackEnd-ProjetoFinal (main)
$ npm install
```

-  Verificar o arquivo `.env.example` quais as variáveis de ambiente necessárias;
```
- .env.example (Variáveis de ambiente necess)

MONGODB_URL=string_de_conexao_banco_de_dados
SECRET=chave_secreta
PORT=porta
```

- Conectar ao [MongoAtlas](https://www.mongodb.com/cloud/atlas); Para criar ou utilizar um Cluster e inserir a String de Conexão no app.js. a `URL do MONGO_URL` fica "guardada" no `.env`conforme demonstrado no `.env.example`.

``` 
- String de conexão com Mongo Atlas
   
mongoose.connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true,      
    useUnifiedTopology: true
    });
```



### ____

___ Inserir ROTAS __
### Others Informations

1- Fechar [porta](https://medium.com/@daniloassis.ti/como-finalizar-um-processo-em-aberto-no-windows-525652152902) em uso ou saber quais estão sendo utilizadas;

2- Problemas com a  [DNS](https://use.opendns.com/) no computador;




## __Basic Overview__

Emissão de Carteira de Estudante Universitária de forma prática e confiável.

 Os Estudante pode verificar se estão aptos a solicitar a carteira de estudante no ano letivo.
 O Objetivo é dirimir dificuldades no processo atual e fraudes.

<p>
    <img src="img/CarteiraEstudante.jpg" align="center" width="400px" > 
    <br> </br>
</p>

#### Programming Language
![JavaScript](https://img.shields.io/badge/-JavaScript-black?style=flat-square&logo=javascript) 

#### Software Programming
 ![Nodejs](https://img.shields.io/badge/NodeJs-339933.svg?logo=node.js&logoColor=white)

 #### Database Programming 
  ![MongoDB](https://img.shields.io/badge/MongoDB-444444.svg?logo=mongoDB&logoColor=green)
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



### __Features__

___ Inserir ROTAS __
### Others Informations

1- Fechar [porta](https://medium.com/@daniloassis.ti/como-finalizar-um-processo-em-aberto-no-windows-525652152902) em uso ou saber quais estão sendo utilizadas;

2- Problemas com a  [DNS](https://use.opendns.com/) no computador;




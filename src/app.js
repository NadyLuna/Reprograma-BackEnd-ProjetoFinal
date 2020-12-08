require('dotenv-safe').config()
const express = require('express')
const app = express()
const mongoose = require("mongoose")


mongoose.connect(`${process.env.MONGODB_URL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function () {
    console.log("conexão feita com sucesso.")
})

const index = require("./routes/index")
const alunos = require("./routes/alunosRouter")
const faculdades = require("./routes/faculdadesRouter")

app.use(express.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
})

app.use("/", index)
app.use("/alunos", alunos)
app.use("/faculdades", faculdades)


module.exports = app
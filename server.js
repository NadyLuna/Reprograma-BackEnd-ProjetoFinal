const app = require("./src/app");
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`O App está rodando na porta ${port}`)
});

const express = require('express');

const app = express();

app.use(express.json());

const funcionarioController = require('./controller/funcionarioController');

app.use("/", funcionarioController);

const PORT = 3027;

app.listen(PORT,()=> {
    console.log(`Servidor rodando na porta ${PORT}`);
})
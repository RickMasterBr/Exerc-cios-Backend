const express = require('express');
const app = express();
const controller = require('./controller/controller.js');


app.use("/api", controller);

const PORT = 3012

app.listen(3012, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
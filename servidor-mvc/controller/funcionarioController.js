const express = require('express');

const app = express.Router();

const service = require('../service/funcionarioService');

app.get("/funcionarios", (req, res) =>{
    const dados = service.listarFuncionarios();
    res.json(dados);
})

app.post("/funcionarios", (req, res) =>{
    const novo = req.body;

    service.inserirFuncionario(novo);

    res.send("Funcionario inserido");
})

app.put("/funcionarios/:id", (req, res) =>{
    const id = req.params.id;

    const dados = req.body;

    service.atualizarFuncionario(id, dados);

    res.send("Funcionario atualizado");
})

app.delete("/funcionarios/:id", (req, res) =>{
    const id = req.params.id;
    service.excluirFuncionario(id);
    res.send("Funcionario excluido");
});

module.exports = app;
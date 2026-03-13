const express = require("express");

const app = express.Router();

app.get("/usuario", (req,res) => {
    const usuarios = [
        { id: 1, nome: "Carlos", rg: "1234567" },
        { id: 2, nome: "Maria", rg: "9876543" }
    ];

    res.json(usuarios);
});

app.get("/site", (req,res) => {
    res.send("Servidor funcionando");
});

app.get("/calculo/:valor", (req,res) => {

    const valor = req.params.valor;
    const resultado = valor * valor;

    res.send(`O valor ${valor} elevado ao quadrado é ${resultado}`);
});

module.exports = app;
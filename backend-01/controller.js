const express = require("express");
const app = express.Router();

let usuario = [
    {
        id: 1,
        nome: "Nivaldo",
        email: "nivaldo@gmail.com"
    },
    {
        id: 2,
        nome: "Richard",
        email: "richard@gmail.com"
    }
]

app.get("usuario", (req,res) => {
    res.json(usuario);
});

app.get("/usuario/;id", (req,res) => {
    const id = req.params.id;
    const objetoUsuario = usuario.find(item => item.id == id);
    res.json(objetoUsuario);
});
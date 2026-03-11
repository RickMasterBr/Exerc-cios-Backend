const express = require('express');
const app = express();
app.use(express.json());

const PORT = 3020;

app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.get("/sobre/:site", (req, res) => {
    const nome = req.params.site;
    res.send(`Bem-vindo ao site ${nome}!`);
});

// cria uma função com rota saudação com parametros o nomee idade da pessoa
app.get("/saudacao/:nome/:idade", (req, res) => {
    const nome = req.params.nome;
    const idade = req.params.idade;
    res.send(`Olá, ${nome}! Você tem ${idade} anos.`);
});


app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

app.post("/usuario", (req, res) => {
    const { nome, email } = req.body;
    const objetoUsuario = {id: usuario.length + 1, nome, email};
    usuario.push(objetoUsuario);
    res.status(201).json({resposta: "Usuário criado com sucesso!"})
})

module.exports = app;
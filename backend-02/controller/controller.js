const express = require('express');

const router = express.Router();

router.get('/inicio', (req, res) => {
    res.send('Bem-vindo à página de início!');
})

module.exports = router
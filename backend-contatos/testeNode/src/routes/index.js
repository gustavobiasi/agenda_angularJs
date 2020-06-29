const express = require('express');
const router = express.Router();

var contatos = [
    {nome: "Pedro", telefone: "99998888", data: new Date(), operadora: {nome: "Oi", codigo: 14}, cor: "blue"},
    {nome: "Ana", telefone: "99997777", data: new Date(), operadora: {nome: "Vivo", codigo: 15}, cor: "yellow" },
    {nome: "Maria", telefone: "99996666", data: new Date(), operadora: {nome: "Tim", codigo: 41}, cor: "red" }
];

router.get('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send({
        contatos
    });
});
module.exports = router;
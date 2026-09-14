// Importar o Router para criar rotas
const { Router } = require("express");

// Instância do Router
const router = Router();

router.get("/", (req, res) => {
    res.send("Retorno de todos os livros");
});

router.post("/", (req, res) => {
    res.send("Você fez uma requisição POST");
});

router.patch("/", (req, res) => {
    res.send("Você fez uma requisição PATCH");
});

router.delete("/", (req, res) => {
    res.send("Você fez uma requisição DELETE");
});

// Exportando exte router para outros arquivos
module.exports = router;

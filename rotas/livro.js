// Importar o Router para criar rotas
const { Router } = require("express");

// Instância do Router
const router = Router();

router.get("/", (req, res) => {
    res.send("Retorno de todos os livros");
});

// Exportando exte router para outros arquivos
module.exports = router;

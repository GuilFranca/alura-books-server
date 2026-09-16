// Importar o Router para criar rotas
const { Router } = require("express");
const { getLivros, getLivro } = require("../controladores/livro");

// Instância do Router
const router = Router();

router.get("/", getLivros);

// :id -> Indica valores variaveis como parâmetro
router.get("/:id", getLivro)

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

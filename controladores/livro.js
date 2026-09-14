// Import da função de manipulação de arquivos
const fs = require("fs");

// Lógica do get da rota de livros
function getLivros(req, res) {
    try {
        // podemos deixar somente livros.json
        const livros = JSON.parse(fs.readFileSync("livros.json"));
        // Caso dê certo já retorna 200 por padrão
        res.send(livros);
    } catch (error) {
        // Definindo erro
        res.status(500);
        res.send(error.message)
    }
}

// Export das lógicas das rotas
module.exports = {
    getLivros,
}
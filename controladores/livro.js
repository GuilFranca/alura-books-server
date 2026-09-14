const { getTodosLivros } = require("../servicos/livro");

// Lógica do get da rota de livros
function getLivros(req, res) {
    try {
        // chama o serviço de mostrar todos os livros
        const livros = getTodosLivros();
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

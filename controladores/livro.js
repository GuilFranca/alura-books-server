const { getTodosLivros, getLivroPorId, insereLivro } = require("../servicos/livro");

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
        res.send(error.message);
    }
}

// Lógica do get para Id's especificos
function getLivro(req, res) {
    try {
        // Parâmetros enviados no caso sendo o :id
        const id = req.params.id;
        const livro = getLivroPorId(id);
        res.send(livro);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body;
        // Função do serviço para inserção de livros novos
        insereLivro(livroNovo);
        res.status(201);
        res.send("Novo livro criado com sucesso");
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
}

// Export das lógicas das rotas
module.exports = {
    getLivros,
    getLivro,
    postLivro
}

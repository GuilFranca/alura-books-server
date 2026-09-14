// Lógica do get da rota de livros
function getLivros(req, res) {
    try {
        throw new Error("teste")
        // Caso dê certo já retorna 200 por padrão
        res.send("Retorno de todos os livros");
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
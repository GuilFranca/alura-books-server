// Import da função de manipulação de arquivos
const fs = require("fs");

function getTodosLivros() {
    // Somente retorna a conexão sem se importar com erros
    return JSON.parse(fs.readFileSync("livros.json"));
}

// Service para pegar o livro pelo id
function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    return livros.filter(livro => livro.id === id);
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));
    // spread para inserir um novo livro
    const novaListaDeLivros = [...livros, livroNovo];
    fs.writeFileSync("livros.json", JSON.stringify(novaListaDeLivros));
}

// Exporta as funções de serviços
module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro
}

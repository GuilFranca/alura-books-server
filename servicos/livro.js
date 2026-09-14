// Import da função de manipulação de arquivos
const fs = require("fs");

function getTodosLivros() {
    // Somente retorna a conexão sem se importar com erros
    return JSON.parse(fs.readFileSync("livros.json"));
}

// Exporta as funções de serviços
module.exports = {
    getTodosLivros,
}
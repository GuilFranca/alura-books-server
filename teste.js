// file system -> Capacidade de ler e escrever arquivos
const fs = require("fs");

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = {
    id: "3",
    nome: "Livro inserido"
}

// caminho, dado
// JSON.stringify -> Transforam o JSON em texto, pois enviar tem que ser em formato de texto
fs.writeFileSync("livros.json", JSON.stringify([...dadosAtuais, novoDado]));

// lê o conteúdo do arquivo / caminho do arquivo
// JSON.parse transforma o resultado em JSON
console.log(dadosAtuais);

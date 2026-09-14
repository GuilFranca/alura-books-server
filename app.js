// Import do express -> Função que cria um servidor express
const express = require("express");
// Import da rota de livros
const rotaLivro = require("./rotas/livro")
// Nossa aplicação 
const app = express();
// Porta da aplicação -> back: 8000 / front: 3000
const port = 8000;

// Caminho / path , rota em si
app.use("/livros", rotaLivro);

// Define a rota que deve ser observada
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
// Import do express -> Função que cria um servidor express
const express = require("express");
// Nossa aplicação 
const app = express();
// Porta da aplicação -> back: 8000 / front: 3000
const port = 8000;

// Caminho / Requisição e Response
// Request é o que é mandado e Response é o que é retornado / resposta
app.get("/", (req, res) => {
    res.send("Olá mundo da Alura do Brasil!")
});

// Define a rota que deve ser observada
app.listen(port, () => {
    console.log(`Escutando a porta ${port}`);
});
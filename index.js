const express = require('express');
const app = express();
const port = 3000;

// Definir a versão da API
let apiVersion = '2.0.1';  // A versão pode ser atualizada no CI/CD

// Rota para o endpoint /nome
app.get('/:nome', (req, res) => {
  const nome = req.params.nome; // Captura o parâmetro "nome" da URL
  res.json({
    message: `Oi ${nome}, bem-vindo à versão ${apiVersion}`
  });
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3333;

// Configuração do CORS
app.use(cors({
  origin: '*', // Permite todas as origens
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'] // Cabeçalhos permitidos
}));
// Middleware para analisar o corpo das requisições
app.use(express.json());


// Configuração correta para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Pasta principal de assets
app.use('/carrossel', express.static(path.join(__dirname, 'carrossel')));
app.use('/projeto-snes', express.static(path.join(__dirname, 'projeto-snes')));

// Middleware para definir headers corretos para CSS
app.use((req, res, next) => {
  if (req.url.endsWith('.css')) {
    res.setHeader('Content-Type', 'text/css');
  }
  next();
});

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'carrossel', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
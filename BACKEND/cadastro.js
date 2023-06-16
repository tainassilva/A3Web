const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const port = 3333;
const dbPath = path.join(__dirname, './DATABASE/usuario.db');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configuração do banco de dados
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão bem-sucedida ao banco de dados SQLite');
  }
});

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rota para cadastrar usuário
app.post('/add', (req, res) => {
  const { name, email, password, cpf, phone } = req.body;

  const insertQuery = `
    INSERT INTO usuario (nome, email, senha, cpf, celular) VALUES (?, ?, ?, ?, ?)
  `;

  db.run(insertQuery, [name, email, password, cpf, phone], function(err) {
    if (err) {
      console.error('Erro ao inserir usuário:', err.message);
      res.status(500).send('Erro ao cadastrar usuário');
    } else {
      console.log('Novo usuário adicionado com sucesso');
      res.redirect('/login.html');
    }
  });
});

// Rota para realizar o login
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const selectQuery = `
    SELECT * FROM usuario WHERE email = ? AND senha = ?
  `;

  db.get(selectQuery, [email, password], (err, row) => {
    if (err) {
      console.error('Erro ao consultar usuário:', err.message);
      res.status(500).send('Erro ao realizar o login');
    } else if (row) {
      console.log('Login bem-sucedido');
      res.redirect('/agenda.html');
    } else {
      console.log('Credenciais inválidas');
      res.redirect('/login.html');
    }
  });
});

// Rota para a página de login
app.get('/login.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/login.html'));
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

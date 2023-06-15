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

// Rota para a verificação de login
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = `
    SELECT * FROM usuario WHERE email = ? AND senha = ?
  `;

  db.get(query, [username, password], (err, row) => {
    if (err) {
      console.error('Erro ao verificar as credenciais de login:', err.message);
      res.status(500).send('Erro ao verificar as credenciais de login');
    } else if (!row) {
      res.status(401).send('Credenciais de login inválidas');
    } else {
      // Credenciais de login válidas
      res.redirect('/agenda.html');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor ouvindo na porta ${port}`);
});

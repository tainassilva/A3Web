const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./DATABASE/usuario.db');
const cors = require('cors');
const bodyParser = require('body-parser');

const porta = 3333;
const app = express();
app.use(cors({ origin: '*' }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'cadastro.html'));
});

app.post('/add', function(req, res) {
  console.log(req.body);
  db.run(
    'INSERT INTO usuario (nome, email, senha, cpf, celular) VALUES (?, ?, ?, ?, ?)',
    [req.body.name, req.body.email, req.body.password, req.body.cpf, req.body.phone],
    function(err) {
      if (err) {
        return console.log(err.message);
      }
      console.log('Novo usuário adicionado com sucesso');
      res.send('Novo usuário com nome = ' + req.body.name);
    }
  );
});

app.listen(porta, function() {
  console.log('Servidor ouvindo na porta ' + porta);
});

const sqlite3 = require('sqlite3').verbose();

// Cria uma instância do banco de dados em memória
const db = new sqlite3.Database('usuario.db');

// Cria a tabela 'cliente'
db.serialize(() => {
  db.run(`
    CREATE TABLE cliente (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT,
      email TEXT,
      senha TEXT,
      cpf TEXT,
      celular TEXT
    )
  `);
});

// Fecha a conexão com o banco de dados
db.close();

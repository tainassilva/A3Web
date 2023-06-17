const sqlite3 = require('sqlite3').verbose();

// Cria uma instância do banco de dados em memória
const db = new sqlite3.Database('usuario.db');



// Cria a tabela 'cliente'
  db.run(`
    CREATE TABLE IF NOT EXISTS cliente (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome VARCHAR(100),
      email VARCHAR(50),
      senha VARCHAR(50),
      cpf VARCHAR(11),
      celular VARCHAR(11)
    )
  `);
  console.log("Tabela criada com sucesso");

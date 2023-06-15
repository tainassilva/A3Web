const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('agendamentos.db');

// Cria tabela "horarios" com as colunas corretas
  db.run('CREATE TABLE IF NOT EXISTS horarios (id INTEGER AUTO INCREMENT, horario TIME, data DATE, PRIMARY KEY(id))');

  console.log("Tabela criada com sucesso");

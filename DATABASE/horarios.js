const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('agendamentos.db');

// Cria tabela "horarios" com as colunas corretas
db.serialize(() => {
  db.run('CREATE TABLE horarios (id INTEGER PRIMARY KEY, horario TIME, data DATE)');
});

db.close();

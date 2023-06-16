var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('DATABASE/usuario.db');

db.serialize(function() {
  db.all('SELECT * FROM cliente', function(err, rows) {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log('Dados da tabela Usuário:');
    rows.forEach(function(row) {
      console.log(row);
    });
  });
});

db.close();

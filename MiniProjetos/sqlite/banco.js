const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./MiniProjetos/sqlite/dados.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected...');
});


db.run('insert into pessoas (id, nome, idade) values(?,?,?)')




db.close()
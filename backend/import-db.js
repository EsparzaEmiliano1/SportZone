const fs = require('fs');
const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 3306,
  multipleStatements: true
});

connection.connect((err) => {
  if (err) {
    console.error('Error conectando a DB:', err);
    return;
  }
  console.log('Conectado a la base de datos remota');

  // Primero crear la base de datos si no existe
  const createDb = `CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`;
  
  connection.query(createDb, (error) => {
    if (error) {
      console.error('Error creando base de datos:', error);
      connection.end();
      return;
    }
    
    console.log(`Base de datos '${process.env.DB_NAME}' lista`);
    
    // Ahora seleccionar la base de datos e importar el SQL
    const usDb = `USE ${process.env.DB_NAME};`;
    const sql = fs.readFileSync('../tienda_db.sql', 'utf8');
    const fullSQL = usDb + '\n' + sql;

    connection.query(fullSQL, (error, results) => {
      if (error) {
        console.error('Error importando SQL:', error);
        connection.end();
        return;
      }
      console.log('✅ Base de datos importada exitosamente');
      connection.end();
    });
  });
});

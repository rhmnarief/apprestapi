var mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'',
    database :'dbrestapi',
    port : '3307',
}
  );

conn.connect((err) =>{
    if(err) throw err;
    console.log('My Sql Terkoneksi');
});

module.exports = conn;
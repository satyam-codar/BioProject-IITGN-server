

// const mysql=require('mysql2')

// const connection= mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'password',
//     database: 'test_db',
//     dialect: "mysql"
// })
// module.exports=connection;


module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "database_dna",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
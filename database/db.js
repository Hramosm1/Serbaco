// const sql = require('mssql/msnodesqlv8');

//Parametros para conexion a la base datos
//Conexion a la base de datos de desarrollo
// const config = {
//     database: 'SerbacoDB_Version2',
//     server: '192.168.8.6',
//     user: 'serbaco',
//     password: 'k*brSuOcsY',
//     port: 1433, //Default port for sql server
//     options: {
//         encrypt: false, //if on windows Azure will set to true
//     }
// }

// const config = {
//     database: 'SerbacoDB_Version2',
//     server: '192.168.8.8',
//     user: 'serbaco',
//     password: 'c4XOB+0Y^I',
//     port: 1433, //Default port for sql server
//     options: {
//         encrypt: false, //if on windows Azure will set to true
//     }
// }

//Conexion a la base de datos de UAT
// const config = {
//     database: 'SerbacoDB_Version2',
//     server:'192.168.8.27',
//     user:'jchavez',
//     password:'6N84hVG2U',
//     port: 1433, //default port for sql server
//     options:{
//         encrypt: false, //if on windows azure will set to true
//         trustedconnection:true,
//     }
// }

//Conexion
// const poolPromise = new sql.ConnectionPool(config).connect().then(pool =>{
//     console.log('Connected to MSSQL');
//     return pool;
// }).catch(err => console.log('Database Connection Failed! Bad Config: ',err));

// module.exports = {
//     sql,
//     poolPromise
// }
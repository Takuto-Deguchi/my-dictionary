// {
//   "development": {
//     "username": "cqdchkuqwioyxi",
//     "password": "a5bb3a7e4ce9abc103f4a67a962af02f6312c8d88569d2335d3374be5aedb311",
//     "database": "d155fe0o77tnnp",
//     "host": "ec2-52-200-215-149.compute-1.amazonaws.com",
//     "port": "5432",
//     "dialect": "postgres",
//     "dialectOptions": {
//       "ssl": {
//         "require": true,
//         "rejectUnauthorized": false
//       }
//     }
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }

require('dotenv').config()

console.log(process.env.DB_HOST)
config = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
}
module.exports = config

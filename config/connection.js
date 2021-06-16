require('dotenv').config();
const Sequelize = require('sequelize');

let sequelize;

// when app is deployed, it will have access to Heroku's JawsDB URL variable and use that value to connect
if(process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // when not deployed, use localhost configuration
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      // dialectOptions: {
      //   decimalNumbers: true,
      // },
      port: 3306
  });
}

// const sequelize = process.env.JAWSDB_URL
//   ? new Sequelize(process.env.JAWSDB_URL)
//   : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
//       host: 'localhost',
//       dialect: 'mysql',
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     });

module.exports = sequelize;

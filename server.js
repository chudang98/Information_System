const mongoose = require('mongoose');
const dotenv = require('dotenv');
const methodOverride = require('method-override');
const app = require('./app');

dotenv.config({ path: './config.env' });

let port = process.env.PORT;
// database = process.env.DATABASE,
// username = process.env.DATABASE_USERNAME,
// password = process.env.DATABASE_PASSWORD;

// let DB = database
//   .replace('<USERNAME>', username)
//   .replace('<PASSWORD>', password);

// let DB = process.env.DATABASE;
// mongoose
//   .connect(DB, {
//     userNewUrlParser: true,
//     userCreateIndex: true,
//     userFindAndModify: false,
//   })
//   .then((con) => {
//     console.log('Connection success to server...');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
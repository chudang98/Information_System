const dotenv = require('dotenv');
const methodOverride = require('method-override');
const app = require('./app');

dotenv.config({ path: './config.env' });
const db = require("./models");

const port = process.env.PORT;

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to database...');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(methodOverride('_method'));

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
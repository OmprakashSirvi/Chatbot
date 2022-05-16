const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 8080;
const host = '127.0.0.1';

const DB = process.env.DATABASE_CONNECTION_STRING.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {})
  .then(() => {
    console.log('db connection success by node');
  })
  .catch((err) => {
    console.log(`There was some error \nError : ${err.message}`);
  });

app.listen(port, host, () => {
  console.log(`The app is up and running at : http://${host}:${port}`);
});

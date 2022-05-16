const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const { spawn } = require('child_process');
const chatRoute = require('./Routes/chatRoutes');

const app = express();

app.use(cors());

app.use(express.json());

// for development logging
if (process.env.NODE_ENV == 'development') {
  app.use(morgan('dev'));
}

const getScriptData = (fileName, ...args) => {
  return new Promise((resolve, reject) => {
    console.log(args);
    const python = spawn('python', [fileName, args]);

    python.on('error', (err) => {
      console.log(err.message);
      reject('Could not run your python script');
    });

    python.stdout.on('data', (data) => {
      resolve(data.toString());
    });

    python.stdout.on('close', (code) => {
      reject(code);
    });
  });
};

app.get('/api/v1/', (req, res) => {
  res.status(200).json({
    status: 'sucecss',
    message: 'Hello from api',
  });
});

app.use('/api/v1/chat', chatRoute);

module.exports = app;

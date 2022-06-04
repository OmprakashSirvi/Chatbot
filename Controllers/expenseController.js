// Import the functions you need from the SDKs you need
const { initializeApp } = require('firebase/app');

const database = require('firebase/database');
const catchAsync = require('../utils/catchAsync');
// const firebase = require('firebase');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase

try {
  initializeApp(firebaseConfig);
} catch (e) {
  console.log(err);
}

const firebaseDB = database.getDatabase();

exports.getFirebaseData = catchAsync(async (req, res, next) => {
  const expense = database.ref(firebaseDB, 'expense/expenses');
  const data = await database.get(expense);

  res.status(200).json({
    status: 'success',
    message: 'Got your responses',
    data: data.val(),
  });
});

exports.addExpenseData = catchAsync(async (req, res, next) => {
  const date = req.body.date;
  const title = req.body.title;
  const amount = req.body.amount;

  let length = 0;
  const expense = database.ref(firebaseDB, 'expense/expenses');

  const data = await database.get(expense);

  if (data.exists()) length = data.val().length;

  database.set(database.ref(firebaseDB, 'expense/expenses/' + length), {
    date: date,
    title: title,
    amount: amount,
  });

  res.status(200).json({
    status: 'success',
    message: 'added your expense',
    new_length: length + 1,
  });
});

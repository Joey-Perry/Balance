
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const path = require('path');
const session = require('express-session');
const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const PORT = process.env.port || 5050;
// const { accounts, budgets, transactions } = require('./mockData');

const { login, register, logout } = require('./controllers/authController');
const { getUserAccounts, addNewAccount } = require('./controllers/accountController');
const { getUserBudgets, addNewBudgetCategory, updateBudgetCategory, deleteBudgetCategory } = require('./controllers/budgetController');
const { getUserTransactions, addNewTransactions, updateTransactions, deleteTransaction, addNewTransaction } = require('./controllers/transactionController');

// MIDDLEWARE
app.use(express.json());
app.use(express.static(path.join('../build')));

// ACTIVATE MASSIVE
massive({
    connectionString: process.env.DATABASE_URL || CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('DB connection established!');
}).catch(err => console.log(`DB connection error: ${err}`));

// SESSION
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } // 1 day
}))

// ENDPOINTS
// ACCOUNT ENDPOINTS
app.get('/api/accounts', getUserAccounts);
app.post('/api/account-details', addNewAccount);

// BUDGET CATEGORY ENDPOINTS
app.get('/api/budgets', getUserBudgets);
app.post('/api/budgets', addNewBudgetCategory);
app.put('/api/budgets', updateBudgetCategory);
app.delete('/api/budgets/:id', deleteBudgetCategory);

// TRANSACTIONS ENDPOINTS
app.get('/api/transactions', getUserTransactions);
app.post('/api/transactions', addNewTransaction);
app.put('/api/transactions', updateTransactions);
app.delete('/api/transactions/:id', deleteTransaction);

// LOGIN ENDPOINTS
app.post('/auth/login', login);
app.post('/auth/register', register);

// LOGOUT ENDPOINT
app.get('/auth/logout', logout);

// ACTIVATE SERVER
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
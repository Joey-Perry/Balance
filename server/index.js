
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const path = require('path');
const session = require('express-session');
const { CONNECTION_STRING, SESSION_SECRET } = process.env;
const PORT = process.env.port || 5050;

const { getUser, login } = require('./controllers/authController');

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
const accounts = [{
    "id": 1,
    "type": "debt",
    "name": "Zoovu",
    "notes": "commodo placerat praesent blandit nam",
    "amount": 1000
  }, {
    "id": 2,
    "type": "savings",
    "name": "Meevee",
    "notes": "primis in faucibus orci luctus",
    "amount": 1000
  }, {
    "id": 3,
    "type": "savings",
    "name": "Mynte",
    "notes": "integer tincidunt ante vel ipsum",
    "amount": 2000
  }, {
    "id": 4,
    "type": "debt",
    "name": "Jamia",
    "notes": "vitae mattis nibh",
    "amount": 2000
  }, {
    "id": 5,
    "type": "savings",
    "name": "Voonyx",
    "notes": "ultrices posuere cubilia",
    "amount": 3000
  }, {
    "id": 6,
    "type": "checking",
    "name": "Tagchat",
    "notes": "donec semper sapien a libero nam",
    "amount": 1000
  }, {
    "id": 7,
    "type": "savings",
    "name": "Camido",
    "notes": "sit amet nunc viverra dapibus nulla suscipit",
    "amount": 4000
  }];

app.get('/api/accounts', (req, res) => {
    res.status(200).send(accounts)
});

// BUDGET ENDPOINTS

const budgets = [{
  "id": 1,
  "expected": 279,
  "actual": 31,
  "name": "Rent",
  "date": "10/10/2020"
}, {
  "id": 2,
  "expected": 157,
  "actual": 86,
  "name": "Car",
  "date": "10/28/2020"
}, {
  "id": 3,
  "expected": 122,
  "actual": 14,
  "name": "Electricity",
  "date": "10/06/2020"
}, {
  "id": 4,
  "expected": 135,
  "actual": 99,
  "name": "Insurance",
  "date": "10/22/2020"
}, {
  "id": 5,
  "expected": 264,
  "actual": 35,
  "name": "Groceries",
  "date": "10/21/2020"
}];

app.get('/api/budgets', (req, res) => {
  res.status(200).send(budgets);
});

// TRANSCACTIONS ENDPOINTS

const transactions = [{
  "id": 1,
  "vendor": "Mymm",
  "amount": 17,
  "category": "Misc",
  "description": "potenti nullam porttitor lacus at",
  "date": "10/30/2020"
}, {
  "id": 2,
  "vendor": "Skyble",
  "amount": 14,
  "category": "Misc",
  "description": "tincidunt ante vel ipsum praesent blandit lacinia erat vestibulum",
  "date": "10/29/2020"
}, {
  "id": 3,
  "vendor": "Zazio",
  "amount": 46,
  "category": "Misc",
  "description": "in lectus pellentesque at nulla suspendisse potenti cras",
  "date": "10/21/2020"
}, {
  "id": 4,
  "vendor": "Jabberstorm",
  "amount": 82,
  "category": "Groceries",
  "description": "blandit ultrices enim lorem ipsum dolor sit amet consectetuer",
  "date": "10/25/2020"
}, {
  "id": 5,
  "vendor": "Gabtune",
  "amount": 67,
  "category": "Groceries",
  "description": "tincidunt nulla mollis molestie lorem quisque ut",
  "date": "10/29/2020"
}, {
  "id": 6,
  "vendor": "Shufflester",
  "amount": 36,
  "category": "Misc",
  "description": "pede venenatis non sodales sed tincidunt eu felis fusce posuere",
  "date": "10/14/2020"
}, {
  "id": 7,
  "vendor": "Yozio",
  "amount": 87,
  "category": "Gas",
  "description": "lectus in quam fringilla rhoncus mauris",
  "date": "10/19/2020"
}, {
  "id": 8,
  "vendor": "Buzzster",
  "amount": 15,
  "category": "Gas",
  "description": "mattis pulvinar nulla pede ullamcorper",
  "date": "10/18/2020"
}, {
  "id": 9,
  "vendor": "Dabjam",
  "amount": 7,
  "category": "Misc",
  "description": "faucibus orci luctus et ultrices",
  "date": "10/24/2020"
}, {
  "id": 10,
  "vendor": "Edgeify",
  "amount": 40,
  "category": "Gas",
  "description": "rhoncus dui vel sem sed",
  "date": "10/30/2020"
}];

app.get('/api/transactions', (req, res) => {
  res.status(200).send(transactions)
})

// LOGIN ENDPOINTS

app.post('/auth/login', login);

// ACTIVATE SERVER
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
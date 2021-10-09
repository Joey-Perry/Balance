
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const path = require('path');
const { CONNECTION_STRING } = process.env;
const PORT = process.env.port || 5050;

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
})


// ACTIVATE SERVER
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
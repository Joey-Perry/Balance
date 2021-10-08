
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


// ACTIVATE SERVER
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
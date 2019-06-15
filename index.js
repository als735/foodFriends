require('dotenv').config();
const express = require('express'); 
const massive = require('massive'); 
const axios = require('axios');  
const controller = require("./server/controller");
const session = require("express-session");
const bcrypt = require('bcrypt');

const app = express(); 
let {SERVER_PORT} = process.env; 

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true,
    cookie: {maxAge: 1200000}
  })
); 

massive(process.env.CONNECTION_STRING)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('the db is connected')
    })
    .catch(err => console.log('err in the db'));


  const port = process.env.port || 4011;
  app.listen(SERVER_PORT, () => {
      console.log(`Purring on Port ${SERVER_PORT}`); 
  }); 
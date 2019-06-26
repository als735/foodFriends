require('dotenv').config();
const express = require('express'); 
const massive = require('massive'); 
const axios = require('axios');  
const authenticate = require("./controller/authController");
const goals = require("./controller/goalController");
const recipe = require("./controller/recipeController"); 
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
 
// authie endpoints 
app.post('/api/auth/login', authenticate.login); 
app.post('/api/auth/register', authenticate.register); 
app.get('/api/auth/me', authenticate.authMe); 
app.post('/api/auth/logout', authenticate.logout); 
 

// goal endpoints 
app.put(`/api/goals/macros`, goals.editMacros); 
app.put(`/api/goals/weight`, goals.editWeight); 

//recipe endpoints  
app.post('/api/recipe/addRecipe', recipe.makeMeal); 
app.get('/api/recipe/retrieve', recipe.retrieveRecipes); 
app.delete('/api/recipe/delete/:recipes_id', recipe.deleteRecipes);



  const port = process.env.port || 4011;
  app.listen(SERVER_PORT, () => {
      console.log(`Purring on Port ${SERVER_PORT}`); 
  }); 
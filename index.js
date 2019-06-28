require('dotenv').config();
const express = require('express'); 
const massive = require('massive'); 
const authenticate = require("./controller/authController");
const goals = require("./controller/goalController");
const recipe = require("./controller/recipeController"); 
const session = require("express-session");
const bodyParser = require('body-parser'); 
const cors = require('cors'); 
const path = require('path'); 

const app = express(); 
let {PORT} = process.env; 

app.use(express.json());
app.use(cors()); 
app.use(bodyParser.json()); 

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true, 
    saveUninitialized: true,
    cookie: {maxAge: 60000}
  })
); 

massive(process.env.DATABASE_URL)
    .then(dbInstance => {
        app.set('db', dbInstance)
        console.log('the db is connected')
    })
    .catch(err => console.log('err in the db'));

    /// Serves static files (Frontend). Must be above all of the routes.
app.use(express.static(path.join(__dirname, '/build')));


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
app.delete('/api/recipe/delete', recipe.deleteRecipes);
app.get('/api/recipe/retrieveOne', recipe.retrieveThisRecipe); 


/// Catch all for routing. Must be below all other routes. 
app.get('/*', (req, res) => {
    res.sendFile('index.html', {
        root: path.join(__dirname, "build")
      })
});

  app.listen(PORT, () => {
      console.log(`Purring on Port ${PORT}`); 
  }); 
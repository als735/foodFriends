const bcrypt = require('bcrypt');
const saltRounds = 10
// const session = require("express-session");

 
module.exports = {
    login: (req, res, next) => {
        const {session} = req; 
        let {email, password} = req.body; 
        let db = req.app.get('db')
        let currentUser;
        // check for user by email
        db.users.findOne({email})
            //Massive queries return rows from DB
            .then((user)=>{
                if(user){
                    currentUser = user; 
                //checks for correct password 
                return bcrypt.compare(password, user.user_password)
            } else {
                throw("User does not exist!")
            }
        }) //chain a promise 
        .then((isMatch)=>{
            if(isMatch){
                delete currentUser.user_password

                req.session.user = currentUser
                // send back response
                res.send({success: true, user:currentUser})
            }else{
                throw('Incorrect credentials')
            }
        })
        .catch((err)=>{
            //If incorrect send back failed loging
            res.send({success:false, err})
        })

    }, 

    register: (req, res, next) => {
        const db = req.app.get('db');

        const {email, password, first_name, last_name, calories, net_carbs, fat, protein} = req.body; 

        db.users.findOne({email})
            .then((user)=>{
                if(user){
                    throw("This user already exists. Please login.")
                }else {
                    return bcrypt.hash(password, saltRounds);
                }
            })
            .then((hash)=> {
                return db.users.insert({email, user_password:hash,first_name,last_name,calories,net_carbs,fat,protein})
            })
            .then((user)=>{
                delete user.user_password; 
                req.session.user = user; 
                res.send({success: true, user:user})
            })
            .catch((err) => {
                res.send({success:false, err})
            })

    },
    authMe: (req, res, next) => {


    },

    logout: (req, res, next) => {


    }
}



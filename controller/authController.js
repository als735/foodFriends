const bcrypt = require('bcrypt');
const saltRounds = 10

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
        .then((user)=>{
            if(user){
                delete currentUser.user_password
                req.session.user = currentUser
                //send back response 
                res.send({success: true, user:currentUser})
            } else {
                throw ('Incorrect email or password')
            }
        })
        .catch((err)=>{
            res.send({success: false, err})
        })

    }, 

    register: (req, res, next) => {


    },
    authMe: (req, res, next) => {


    },

    logout: (req, res, next) => {


    }
}



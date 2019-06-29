module.exports = {
    addLife : (req, res, next) => {
        const {session} = req; 
        const db = req.app.get('db'); 
        const {life_goal} = req.body; 
        db.life.insert({life_goal, user_id : session.user.user_id})
        .then( () => {
            return db.life.find({user_id: session.user.user_id})
        })
        .then((life) => {
            res.send({success: true, life}); 
        })
    }, 
    retrieveLife : (req, res, next) => {
        const db = req.app.get('db'); 
        const {session} = req; 

        db.life.find({user_id: session.user.user_id})
        .then((life) => {
            res.send({success: true, life}); 
        })
        .catch(err => {
            res.send({ success: false, err });
        });
    },

    deleteLife : (req, res, next) => {
        const {session} = req; 
        const db = req.app.get('db'); 

        db.life.destroy({life_id: req.query.life_id})
           .then(() => {
              return  db.life.find({user_id: session.user.user_id})
           })
           .then((lifeGoals) => {
            res.send({success: true, lifeGoals});
           })
           .catch(err => {
               res.send({success: false, err});
           })
    }
}
module.exports = {
    addGroceries : (req, res, next) => {
        const {session} = req; 
        const db = req.app.get('db'); 
        const {grocery_item} = req.body; 
        db.groceries.insert({grocery_item, user_id : session.user.user_id})
        .then( (groceries) => {
            res.send({success: true, groceries}); 
        }); 
    }, 
    retrieveGroceries : (req, res, next) => {
        const db = req.app.get('db'); 
        const {session} = req; 

        db.groceries.find({user_id: session.user.user_id})
        .then((groceries) => {
            res.send({success: true, groceries}); 
        })
        .catch(err => {
            res.send({ success: false, err });
        });
    },

    deleteGroceries : (req, res, next) => {
        const db = req.app.get('db'); 
        db.groceries.destroy({groceries_id: req.query.groceries_id})
           .then((groceries) => {
               res.send({success: true, groceries});
           })
           .catch(err => {
               res.send({success: false, err});
           })
    }
}
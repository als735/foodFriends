module.exports = {
    editMacros: (req, res, next) => {
        const db = req.app.get('db');
        const {session} = req; 
    //1 destructure stuff from the body 
        const {macros_id, columnName,value} = req.body; 
    //2 create an object called update object 
        const updateObject = {}; 
        updateObject[columnName] = value; 
    //3 update macros
        db.macros.update({macros_id}, updateObject)
        .then((macros) => {
            res.send(macros)
        })
        .catch((err) => {
            res.send({success:false, err})
        })
//4 send back the updated macros line 
    },  

    editWeight: (req, res, next) => {
        const db = req.app.get('db');
        const {session} = req; 
        const {weight_id, columnName, value} = req.body; 
        const updateObject = {};
        updateObject[columnName] = value; 
        db.weight_goals.update({weight_id}, updateObject)
        .then((weight) => {
            res.send(weight)
        })
        .catch((err) => {
            res.send({success: false, err})
        })
    }
}
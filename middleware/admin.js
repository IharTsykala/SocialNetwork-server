const jwt = require('jsonwebtoken');
const User = require('../users/model-users')

const admin = async (req, res, next) => {
    try {                
    const token = req.header('Authorization').replace('Bearer ', '');     
        const decoded = jwt.verify(token, "IharTsykala");        
        const user = await User.findOne({_id: decoded._id, 'tokens.token': token });        
        if(!user){
            throw new Error("Please autentificate")
        }
        if(user.role !== "admin"){
            throw new Error("You have not admin root")
        }
        req.token = token 
        req.user = user 
        next()
    } catch (e) {
        res.status(401).send({error: e.message })
    }
}

module.exports = admin
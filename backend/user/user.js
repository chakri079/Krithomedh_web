const exp = require('express');
const userApp = exp.Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

userApp.use((req,res,next)=>{
    userCollection = req.app.get('userCollection');
    next();
})

userApp.use(exp.json());
userApp.post('/login', async (req, res) => {
    let user = req.body;
    const status = await userCollection.findOne({ id: user.id });
    if (status === null) {
        res.send({ message: "credentials don't exist" });
    } else {
        if(user.password === status.password){
            const signedToken = jwt.sign({ id: user.id }, "invalid", { expiresIn: '1d' });
            res.send({ message: "login success", token: signedToken, user: status });
        }
        else{
            res.send({ message: "invalid password" });
    }
}
})

module.exports = userApp;
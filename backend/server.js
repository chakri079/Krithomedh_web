const exp = require('express');
const app = exp();
const mc = require('mongodb').MongoClient;
const path = require('path');
//deploying react build in this server
app.use(exp.static(path.join(__dirname,'../build')))

mc.connect('mongodb://127.0.0.1:27017').then(client=>{
    const dbObj = client.db('krithomedha');
    const userCollection = dbObj.collection('userCollection');
    app.set('userCollection', userCollection);
    console.log("connected to mongoDB");
})
.catch(err=>{
    console.log(err)
})

const userApp = require('./user/user');
app.use(exp.json());
app.use('/user-app',userApp);

app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,'../build/index.html'))
})

app.use((err,req,res,next)=>{
    res.send({message : "error", payload : err})
})

app.listen(4000,()=>console.log("running on port 4000"))

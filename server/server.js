//requres
const bodyParser = require('body-parser');
const express= require('express')
const app = express();
//uses
app.use (express.static('server/public'));
app.use (bodyParser.urlencoded({extended: true}))

//globals
const port= 5000;
let inventory = [];
//spin up server
app.listen (port, ()=>{
    console.log('sever up on:', port)
})
//routes
app.get('/inventory', (req, res)=>{
    console.log('/inventory GET hit');
    res.send(inventory)
})
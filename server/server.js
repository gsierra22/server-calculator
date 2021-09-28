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
let sum=0
app.get('/math', (req, res)=>{
    console.log('/inventory GET hit');
    res.send(inventory)
})
app.post('/final',(req,res)=>{
    console.log(req.body);
    let el=req.body;
    let answer=0
    if (el.formula==='+'){
        el.answer= (parseInt(el.num1)+(parseInt(el.num2)))
    }
    else if (el.formula==='-'){
        el.answer= (parseInt(el.num1)-(parseInt(el.num2)))
    }else if (el.formula==='*'){
        el.answer= (parseInt(el.num1)*(parseInt(el.num2)))
    } else if (el.formula==='/'){
        el.answer= (parseInt(el.num1)/(parseInt(el.num2)))}

    
    console.log(answer);
    inventory.push(el)
    res.sendStatus(200);
})
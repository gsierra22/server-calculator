//requres
const bodyParser = require('body-parser');
const express= require('express')
const app = express();
//uses
app.use (express.static('server/public'));
app.use (bodyParser.urlencoded({extended: true}))

//globals
const port= 5000;
let inventory = [

    {
        num1: 5,
        formula: '+',
        num2: 4,
        result: 9
    }
];
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
    let answer={result: el.num1-el.num2};
    
    console.log(answer);
    inventory.push(answer)
    res.sendStatus(200);
})
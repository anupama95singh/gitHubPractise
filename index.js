const express = require('express');
const bodyParser = require('body-parser');


let cors = require('cors');
var controller = require('./controller');
var app = express();  //called the express function

app.use(cors());

app.use(bodyParser.json());

 app.listen(3000,() => console.log('server started at port 3000'));

 
app.use('/',controller); 
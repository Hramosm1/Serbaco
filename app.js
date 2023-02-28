const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const router = require('./routes/routes');
const app = express();

app.use(cors());

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:false}));
//parse application/json
app.use(bodyParser.json());

app.use(morgan('dev'));
//create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, '/logs/access.log'), { flags: 'a' })

app.use(morgan('combined', { stream: accessLogStream }))

app.use('/servicio_rest/express/myapp/api',router)

app.use((req, res, next) =>{
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested_With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

  next();
});

const port = 9210

app.listen(process.env.PORT || port , (err) => {
  if(err)
console.log('Unable to start the server!')
else
console.log('Server started running on : ' + port)
})

const express = require('express')
const app = express()

app.post('/Hook', function(req, res){
    console.log(res);
   
});

app.listen(3000);
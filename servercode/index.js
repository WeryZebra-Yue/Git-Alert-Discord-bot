const express = require('express')
const app = express()

app.post('/Hook', function(req, res){
    console.log(req.body);
    res.end(JSON.stringify(response));  
});

app.listen(3000);
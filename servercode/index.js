const express = require('express')
const app = express()

app.post('/Hook', function(req, res){
    // console.log(res.);
   res.json(req.body);
});

app.listen(3000);
const express = require('express')
const app = express()

app.post('/Hook', function(req, res){
    // console.log(res.);
   req.on('data', function(data){
       console.log(data);
   });
});

app.listen(3000);
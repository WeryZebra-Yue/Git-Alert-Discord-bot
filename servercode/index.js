const express = require('express')
const app = express()
app.use(
    express.urlencoded({
      extended: true
    })
  )
  
  app.use(express.json())
app.post('/Hook', function(req, res){
    // console.log(res.);
    console.log(req.body);
});

app.listen(3000);
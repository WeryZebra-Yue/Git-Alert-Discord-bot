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
    req.on('data', (data)  => {
        console.log(JSON.parse(data)); // 'Buy the milk'
        res.end();
      })
});

app.listen(3000);
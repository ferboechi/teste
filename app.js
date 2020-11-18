const express = require('express')
const app = express()

app.use(express.json())

app.get('/teste', function (req, res) {
  res.json({ teste: "teste"});
})

app.listen(3000, function() {
  console.log('Hello World app listening on port 3000!');
})


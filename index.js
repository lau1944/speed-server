const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.get('/download', function(req, res){
  const file = `${__dirname}/10M.iso`;
  res.download(file); 
});

app.listen(port, () => {
  console.log('Listening to port 8080');
})
const express = require('express');

const port = process.env.PORT || 8080;
const app = express();

app.get('/download', (req, res) => {
  const file = `${__dirname}/10M.iso`;
  res.download(file); 
});

app.post('/', (req, res) => {
  res.status(200).send('Cool');
})

app.get('/', (req, res) => {
  res.status(200).send('Cool');
})

app.listen(port, () => {
  console.log('Listening to port 8080');
})
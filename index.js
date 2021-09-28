const express = require('express');

const app = express();

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('home');
});

const port = 3000;

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
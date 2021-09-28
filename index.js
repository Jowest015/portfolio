const express = require('express');
const handlebars = require('express-handlebars');

const app = express();

//Template engine
app.set('view engine', 'hbs');
app.engine('hbs', handlebars({
  layoutsDir: __dirname + '/views/layouts',
  extname: 'hbs',
  defaultLayout: 'main'
}));

app.use(express.static("public"));

app.get('/', (req, res) => {
  res.render('home');
});

const port = 3000;

app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
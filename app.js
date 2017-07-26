const express = require('express');
const mustacheExpress = require('mustache-express');
const robot = require('./data.js');
const app = express();


app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/robotmustache');

app.use(express.static('public'));
app.get('/thehelp', function(request, response) {
  response.render('the_help', {
    staff: robot.users
  })
})
app.use(express.static('public'));
app.get('/needhelp', function(request, response) {
  response.render('need_help', {
    staff: robot.users
  })
})

app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});

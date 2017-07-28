const express = require('express');
const mustacheExpress = require('mustache-express');
const robot = require('./data.js');
const app = express();


app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/robotmustache');

app.use(express.static('public'));
app.get('/thehelp', function(request, response) {
  response.render('the_help', {staff: robot.users})
})


app.get('/:username', function(request, response) {
  const user = robot.users.find(function(user){return user.username === request.params.username});
  response.render('need_help', {staff: user});
})


app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
});

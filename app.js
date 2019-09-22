var express = require('express');
var parser = require('body-parser');
var app = express();
const path = require('path');

//parsing and getting data
app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

//view engine implemantation
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//set public file
app.use(express.static('public'));

//here define the routerController
const loginRoutes = require('./routes/routeController');
app.use(loginRoutes);

//in here if someone tries to go another route like '/dashdhqd' or something else
//we will return user to login pages.
app.get('*', function(req, res){
    res.render('login');
});

//this app will be listen 3000 port 
app.listen(process.env.PORT || 3000, function() {
    console.log("Server opened in %d port", this.address().port);
});


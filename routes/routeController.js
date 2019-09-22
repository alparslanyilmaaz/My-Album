const express = require('express');
const router = express.Router();

router.get('/', function(req, res){
    res.render('login');
});
router.get('/logout', function(req, res){
    res.render('login');
});

router.post('/homepage', function(req,res){
    if(req.body.username == "admin" && req.body.password == "admin"){
        res.render('homepage');
    } else{
        res.render('login', {message: 'Username or Password is wrong'});
    }
});

router.get('/', function(req, res){
    res.render('login');
});


module.exports = router;
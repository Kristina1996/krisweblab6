var express = require('express');
var mongoose = require('mongoose');
var api = require('./api/api.js');
var bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use(express.static(__dirname + '/'));
var router = express.Router();


app.use('/api', router);

router.get('/users', function(req, res){
    api.getAllUsers().then(function(data) {
        res.json(data);
    })
});

router.get("/users/:id", function(req, res) {
    console.log(req.params.id);
    var id = req.params.id;
    api.getUser(id).then(function(data) {
        console.log(data);
        res.json(data);
    })
});

router.post('/users', function(req, res){
    var user = req.body;
    console.log(user.name);
    api.addUser(user, function(user){
        res.json(user);
    });
});

router.delete('/users/:id', function(req, res) {
    console.log("req.params.id "+req.params.id);
    api.deleteUser(req.params.id);
});

router.put('/users/:id', function(req, res){
    console.log("req.params._id" + req.body.id);
    console.log("req.body" + req.body);
    var id = req.params.id;
    var user = req.body;
    api.updateUser(id,req.body);
});

app.listen(process.env.PORT || PORT, function (){
    console.log('Server started!')
})
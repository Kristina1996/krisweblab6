var mongoose = require('mongoose');
var api = require('./api/api.js');

const app = express();
const PORT = 3000;

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
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
    console.log("req.params._id" + req.params.id);
    console.log("req.body" + req.body);
    var id = req.params.id;
    var user = req.body;
    api.updateUser(id,user);
});

app.listen(process.env.PORT || PORT, function (){
    console.log('Server started!')
})

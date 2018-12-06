var tasks = require('../controllers/tasks');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.get('/tasks', function(req, res){
        tasks.index(req, res);
    });
    app.get('/tasks/:id', function(req, res){
        tasks.getOne(req, res);
    });
    app.post('/tasks/', function(req, res){
        console.log("REQUEST BODY:", req.body);
        tasks.create(req, res);
    });
    app.put("/tasks/:id",function(req, res){
        tasks.edit(req, res);
    });
    app.delete("/tasks/:id", function(req, res){
        tasks.delete(req, res);
    })
}
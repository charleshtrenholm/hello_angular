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
        console.log(req.body, "____))))____))))____)))) REQ BODY");
        tasks.edit(req, res);
    });
    app.delete("/tasks/:id", function(req, res){
        tasks.delete(req, res);
    })
    app.post('/games', function(req, res){
        console.log("GAME REQUEST BODY: ", req.body)
        games.create(req, res);
    })
    app.put('/games/:id', function(req, res){
        console.log("how the hell am i going to make a put request");
        games.createLog(req, res);
    })
}
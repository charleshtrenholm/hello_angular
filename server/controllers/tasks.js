var Task = require('../models/task').Task

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, data){
            if(err){
                console.log(err);
            } else {
                res.json(data);
            }
        })
    },
    getOne: function(req, res){
        Task.find({_id: req.params.id}, function(err, data){
            if(err){
                console.log(err)
            } else {
                res.json(data);
            }
        })
    },
    create: function(req, res){
        console.log(req.body);
        var task = new Task;
        task.title = req.body.title;
        task.desc = req.body.desc;
        task.completed = req.body.completed;
        task.save(function(err){
            if(err){
                console.log(err);
            }
        })
    },
    edit: function(req, res){
        var task = Task.find({_id: req.params.id}, function(err, data){
            if(err){
                console.log(err)
            }
        })
        if(!req.body.title){
            console.log("you probably don't understand how this works");
            console.log("this might be the reason why: ", data.title)
        } else {
            task.title = req.body.title;
        }
        if(req.body.desc){
            task.desc = req.body.desc
        }
        if(req.body.completed){
            task.completed = req.body.completed
        }
        task.save(function(err){
            if(err) console.log(err)
        });
    },
    delete: function(req, res){
        Task.remove({_id: req.params.id}, function(err){
            if(err) console.log(err);
        });
    }
}
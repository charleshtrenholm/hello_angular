var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/task_lyf');

const taskSchema = new mongoose.Schema({
    title: {type: String, required: true, default:""},
    desc: {type: String, required: true, default: ""},
    completed: {type: Boolean, required: true, default: false}
}, {timestamps:true});

mongoose.model("Task", taskSchema);
module.exports = {
    Task: mongoose.model("Task")
}
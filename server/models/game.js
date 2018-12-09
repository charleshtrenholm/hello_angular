var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninjaGold');

const gameSchema = new mongoose.schema({
    logs: [{type: Schema.Types.OjbectId, ref: 'Log'}]
}, {timestamps: true});

var Game = mongoose.model('game', gameSchema);

const logSchema = new mongose.schema({
    game: {type: Schema.Types.ObjectId, ref: 'Game'},
    message: {type: String}
}, {timestamps: true});

var Log = mongoose.model('Log', logSchema);
module.exports = {
    Game: Game,
    Log: Log
}


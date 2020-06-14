const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Time = new Schema({
    name:{
    type: String
    },
    project:{
        type: String
    },
    startTime:{
        type: String
    },
    endTime:{
        type: String
     },
    totalTime:{
            type: String
    },
});

module.exports = mongoose.model('Time',Time);
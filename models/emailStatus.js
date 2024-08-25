const mongoose = require('mongoose');

const EmailStatusSchema = new mongoose.Schema({
    emailId:{
        type:String,
        required:true,
        unique:true,
    },
    status:{
        type:String,
        required:true,
    },
    attempts:{
        type:Number,
        default:0
    },
    lastAttempt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model('EmailStatus',EmailStatusSchema);
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },
    
    QuizId: {type: mongoose.Schema.Types.ObjectId,ref: 'Quiz'}
});

let User = mongoose.model('User', UserSchema);
module.exports = User
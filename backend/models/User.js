const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, enum: ['student', 'instructor'], default: 'student' }
});
module.exports = mongoose.model('User', userSchema);

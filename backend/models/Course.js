const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    content: String,
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});
module.exports = mongoose.model('Course', courseSchema);
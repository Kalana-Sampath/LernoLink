const Course = require('../models/Course');

exports.createCourse = async (req, res) => {
    const course = new Course({ ...req.body, instructor: req.user.id });
    await course.save();
    res.json(course);
};

exports.getCourses = async (req, res) => {
    const courses = await Course.find().populate('instructor', 'username');
    res.json(courses);
};

exports.enrollCourse = async (req, res) => {
    const course = await Course.findById(req.params.id);
    if (!course.students.includes(req.user.id)) {
        course.students.push(req.user.id);
        await course.save();
    }
    res.json({ message: 'Enrolled successfully' });
};

exports.getEnrolledCourses = async (req, res) => {
    const courses = await Course.find({ students: req.user.id });
    res.json(courses);
};

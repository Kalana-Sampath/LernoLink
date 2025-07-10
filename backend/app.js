const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// ========== Inline JWT Middleware ==========
const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(403).json({ error: 'No token' });

const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// ========== Controllers (Stub Implementations) ==========

// Auth Controllers
const register = (req, res) => {
  // Replace with actual registration logic
  res.json({ message: 'User registered (dummy response)' });
};

const login = (req, res) => {
  // Replace with real user authentication
  const user = { id: 1, role: 'instructor' }; // Dummy payload
  const token = jwt.sign(user, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

// Course Controllers
const createCourse = (req, res) => {
  res.json({ message: 'Course created (dummy response)' });
};

const getCourses = (req, res) => {
  res.json([{ id: 1, name: 'React Native Course' }]);
};

const enrollCourse = (req, res) => {
  const courseId = req.params.id;
  res.json({ message: `Enrolled in course ${courseId}` });
};

const getEnrolledCourses = (req, res) => {
  res.json([{ id: 1, name: 'Enrolled Course 1' }]);
};

// ========== Routes ==========

// Auth Routes
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);

// Course Routes (Protected)
app.post('/api/courses', authMiddleware, createCourse);
app.get('/api/courses', authMiddleware, getCourses);
app.post('/api/courses/enroll/:id', authMiddleware, enrollCourse);
app.get('/api/courses/enrolled', authMiddleware, getEnrolledCourses);

// ========== MongoDB Connection & Server Start ==========
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log('Server running on port 5000')))
  .catch(err => console.error(err));


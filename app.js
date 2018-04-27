const express = require('express');
const app = express();
const availableCoursesRoutes = require('./Resource/Available_Courses/available_courses');
app.use('/evening_courses/available_courses',availableCoursesRoutes);

module.exports = app;

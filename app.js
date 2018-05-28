const express = require('express');
const app = express();
const availableCoursesRoutes = require('./Resource/Available_Courses/available_courses');
app.use('/EveningCourses/AvailableCourses',availableCoursesRoutes);

module.exports = app;

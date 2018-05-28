const express = require('express');
const app = express();
const availableCoursesRoutes = require('./Resource/Available_Courses/availableCourses');
app.use('/EveningCourses/AvailableCourses',availableCoursesRoutes);

module.exports = app;

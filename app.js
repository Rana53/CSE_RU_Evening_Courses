const express = require('express');
const app = express();
const availableCoursesRoutes = require('./Resource/Available_Courses');
app.use('/available_courses',availableCoursesRoutes);

module.exports = app;

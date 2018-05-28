const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const availableCoursesRoutes = require('./Resource/Available_Courses/availableCourses');

app.use('/EveningCourses/AvailableCourses',availableCoursesRoutes);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

module.exports = app;

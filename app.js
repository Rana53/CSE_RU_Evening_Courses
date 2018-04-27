const express = require('express');
const app = express();
const availableCoursesRoutes = require('./Resource/Available_Courses');
app.use((req,res,next)=> {
    res.status().jeson({
        message: 'evening courses / available_courses'

    });
});

module.exports = app;

const express = require('express');
const app = express();

const productRoutes = require('./api/routes/product');

app.use('/products',productRoutes);

module.exports = app;

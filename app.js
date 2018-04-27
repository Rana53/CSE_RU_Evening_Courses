const express = require('express');
const app = express();
app.use((req,res,next)=> {
    res.status().jeson({
        message: 'evening courses / available_courses'

    });
});

module.exports = app;
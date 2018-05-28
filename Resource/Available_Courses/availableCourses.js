const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
module.exports = router;

mongoose.connect('mongodb://dbuser:dbpassword@ds137720.mlab.com:37720/se_ru_evening_courses',err =>{
           // in the database link unfortunately cse repace with se cse-> se_ru_evening_course
    if(err){
        console.log('Database not connected error is : ' + err);
    }
    else{
        console.log('Database connected');
    }
}); 

 router.get('/',(req,res,next) => {
     res.status(200).json({
         message : 'Test get request for available_courses end point'
     });
 });

router.post('/',(req,res,next) => {
    res.status(200).json({
        message : 'test post request fro available_courses endpoint'
    });
});

router.patch('/',(req,res,next) => {
    res.status(200).json({
        message : 'test update request for available_courses endpoint'
    });
});

router.delete('/',(req,res,next) => {
    res.status(200).json({
        message : 'test delete request for available_courses endpoint'
    });
});

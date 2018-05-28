const express = require('express');
const router = express.Router();
module.exports = router;

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

const express = require('express');
const router = express.Router();
module.exports = router;

 router.get('/',(req,res,next) => {
     res.status(200).json({
         message : 'Test get request for available_courses end point'
     });
 });




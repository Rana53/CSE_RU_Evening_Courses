const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const AvailableCourses = require('../Available_Courses/availableCoursesSchema');

module.exports = router;
mongoose.connect('mongodb://dbuser:dbpassword@ds137720.mlab.com:37720/se_ru_evening_courses',err =>{
           // in the database link unfortunately cse repace with se cse_ru_evening_courses-> se_ru_evening_course
    if(err){
        console.log('Database not connected error is : ' + err);
    }
    else{
        console.log('Database connected');
    }
}); 

router.get("/", (req,res,next) => {
    AvailableCourses.find()
    .exec()
    .then(docs =>{
        res.status(200).json({
            count: docs.length,
            availableCourses: docs.map(doc =>{
                return{
                    _id: doc._id,
                    courseName: doc.courseName,
                    courseOfferingDept: doc.courseOfferingDept,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/Available_Courses/' + doc._id
                    }
                }
            })
        });
    })
    .catch(err =>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
 });
router.get("/:courseId",(req,res,next) =>{
    const id = req.param.courseId;
    AvailableCourses.findById(id)
    .exec()
    .then(doc =>{
        console.log("From database ",doc);
        if(doc){
            res.status(200).json(doc);
        }
        else{
            res.status(404).json({message: 'not valid id'});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});
router.post("/",(req,res,next) => {
    const availableCourses = new AvailableCourses({
        _id: new mongoose.Types.ObjectId,
        courseName: req.body.courseName, 
        courseOfferingDept: req.body.courseOfferingDept
    });
    availableCourses
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message: 'POST request handled',
            createdCourse: {
                _id: result._id,
                courseName: result.courseName,
                courseOfferingDept: result.courseOfferingDept
            },
            request: {
                type: 'POST',
                url: 'http://localhost:3000/Available_Courses/'+ result._id
            }
        });
    })
    .catch(err =>{
        res.status(500).json({
            message: 'Course can are not stored',
            error: err
        });
    });
    
});

router.patch("/:courseId",(req,res,next) => {
    const id = req.params.courseId;
    const updateOps = { };
    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    AvailableCourses.update({_id: id}, {$set:updateOps})
    .exec()
    .then(result =>{
        console.log(result);
        res.status(500).json({
            message: 'PATCH or UPDATE request',
            updateCourse: result,
            request: {
                type: 'POST',
                url: 'http://localhost:3000/Available_Courses/'+id
            }
        });
    })
    .catch(err =>{
        res.status(500).json({
            type: 'PATCH',
            error: err
        });
    });
});

router.delete("/:courseId",(req,res,next) => {
    const id = req.param.courseId;
    AvailableCourses.remove({_id: id})
    .exec()
    .then(result =>{
        res.status(200).json({
            type: 'DELETE',
            comment: 'successfullly deleted',
            result: result
        });
    })
    .catch(err =>{
        res.status(500).json({
            type: 'DELETE',
            error: err
        });
    });
    
});

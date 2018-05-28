const mongoose = require('mongoose');

const availableCourseSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    courseName : {type:String,require:true},
    courseOfferingDept : {type: String, require: true}

});

module.exports = mongoose.model('AvailableCourse', availableCourseSchema);

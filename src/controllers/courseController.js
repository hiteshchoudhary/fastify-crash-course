const Course  = require("../models/Course")

// get all courses
exports.getCourse = async (req, reply) => {
    try {
        const courses = await Course.find()
        return courses
    } catch (error) {
        throw error
    }
}


// get a single course

exports.getSingleCouse = async (req, reply) => {
    try {
        const courseId = req.params.id
        const course = await Course.findById(courseId)
        return course
    } catch (error) {
        throw error
    }
}


// add a new course

exports.addCourse = async (req, reply) => {
    try {
       const course = new Course(req.body)
       return course.save()
    } catch (error) {
        throw error
    }
}


// update an existing course

exports.updateCourse = async (req, reply) => {
    try {
        const courseId = req.params.id
        const course = req.body
        const {...updatedCourse} = course
        const update = await Course.findByIdAndUpdate(courseId, updatedCourse, {new: true})
        return update
    } catch (error) {
        throw error
    }
}

// delete an existing course

exports.deleteCourse = async(req, reply) => {
    try {
        const courseId = req.params.id
        const course = Course.findByIdAndDelete(courseId)
        return course
    } catch (error) {
        throw error
    }
}
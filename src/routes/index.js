const courseController = require("../controllers/courseController")


const routes = [
    {
        method: 'GET',
        url: '/api/course',
        handler: courseController.getCourse
    },
    {
        method: 'GET',
        url: '/api/course/:id',
        handler: courseController.getSingleCouse
    },
    {
        method: 'POST',
        url: '/api/course',
        handler: courseController.addCourse
    },
    {
        method: 'PUT',
        url: '/api/course/:id',
        handler: courseController.updateCourse
    },
    {
        method: 'DELETE',
        url: '/api/course/:id',
        handler: courseController.deleteCourse
    },

]

module.exports = routes
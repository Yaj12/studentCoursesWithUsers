const {User, Student} = require('../models')
const md5 = require('md5')

//render student regisration form
module.exports.renderStudentRegistrationForm = function(req, res){
    res.render('user/register');
}

module.exports.registerStudent = async function(req, res){
    const user = await User.create({
        email: req.body.email,
        password:md5(req.body.password),
        role: 'student'
    });
    await Student.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        grade_level: req.body.grade_level,
        user_id: user.id
    });
    res.redirect('/courses')
}

//render the login form
module.exports.renderLoginForm = function(req, res){
    res.render('user/login')
}
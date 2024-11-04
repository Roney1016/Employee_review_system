const { title } = require("process");

module.exports.signIn = (req, res) => {

    return res.render('user_sign_in', {
        title: 'Review system | Sign In'
    });
}

module.exports.signUp = (req, res) => {

    return res.render('user_sign_up', {
        title: 'Review system | Sign Up'
    })
}
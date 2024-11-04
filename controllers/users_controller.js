const { title } = require("process");

module.exports.signIn = (req, res) => {
    if (req.isAuthenticated()) {
        if (req.user.role === 'admin') {
            return res.redirect('/admin-dashboard');
        }
        // if user is not admin
        return res.redirect(`employee-dashboard/${req.user.id}`);
    }

    return res.render('user_sign_in', {
        title: 'Review system | Sign In'
    });
}

module.exports.signUp = (req, res) => {

    return res.render('user_sign_up', {
        title: 'Review system | Sign Up'
    })
}
module.exports.createSession = (req, res) => {

    if (req.user.role === 'admin') {
        return res.redirect('/admin-dashboard');
    }
    // if user is not admin it will redirect to employee page
    return res.redirect(`/employee-dashboard/${req.user.id}`);
};
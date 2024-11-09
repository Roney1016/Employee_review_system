const User = require('../models/user');

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

module.exports.create = async (req, res) => {
    try {
        const { username, email, password, confirm_password, role } = req.body;

        // if password doesn't match
        if (password != confirm_password) {
            // alert('Password and Confirm password are not same');
            return res.redirect('back');
        }

        // check if user already exist
        const user = await User.findOne({ email })
        // if user not found in db create one
        if (!user) {
            await User.create(
                {
                    email,
                    password,
                    username,
                    role,
                },
            );
        } else {
            // alert('user already registed !');
            return res.redirect('back');
        }
        return res.redirect('/');
    } catch (err) {
        console.log('error', err);
        return res.redirect('back')
    }
}
module.exports.createSession = (req, res) => {

    if (req.user.role === 'admin') {
        console.log("admin dashboard")
        return res.redirect('/admin-dashboard');
    }
    // if user is not admin it will redirect to employee page
    return res.redirect(`/employee-dashboard/${req.user.id}`);
};

// Clear the cookie
module.exports.destroySession = (req, res) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }

        return res.redirect('/');
    });
};
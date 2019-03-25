var db = require('./db');

module.exports.handleSignup = (email, password) => {

    //Save the user to the database
    db.saveUser({email, password});
};
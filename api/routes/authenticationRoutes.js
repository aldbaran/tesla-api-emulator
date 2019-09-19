module.exports = (app) => {
    var authentication = require('../controllers/authenticationController');

    app.route('/token')
        .post(authentication.token);
};

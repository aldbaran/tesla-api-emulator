module.exports = (app) => {
    var commands = require('../controllers/commandsController');

    app.route('/vehicles/:id/command/:command')
        .post((req, res) => {
            console.log(req.params.command);
            commands[req.params.command](req, res); }
        );
};

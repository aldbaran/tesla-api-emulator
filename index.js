var express = require('express'),
    cors = require('cors'),
    app = express(),
    oauth = express(),
    api = express(),
    port = process.env.PORT || 8000,
    bodyParser = require('body-parser');

// cf. https://tesla-api.timdorr.com/api-basics/authentication
var authenticationRoutes = require('./api/routes/authenticationRoutes');
authenticationRoutes(oauth);

// cf. https://tesla-api.timdorr.com/api-basics/vehicles
var vehiclesRoutes = require('./api/routes/vehiclesRoutes'),
    commandsRoutes = require('./api/routes/commandsRoutes');
vehiclesRoutes(api);
commandsRoutes(api);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/oauth', oauth);
app.use('/api/1', api);
app.listen(port);

console.log('RESTful API started on:', port);

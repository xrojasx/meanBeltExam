const express = require('express');
app = express();
bodyParser = require('body-parser');
path = require('path');
port = 8000;
session = require('express-session')

app.use(bodyParser.json());
app.use(express.static(__dirname + '/public/dist'));
app.use(session({ secret: 'nobodyknows',
    resave: false,
    saveUninitialized: true
}));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(port, function () {
console.log(`listening on port ${port}`);
});
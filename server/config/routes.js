const users = require('./../controllers/users.js');
const items = require('./../controllers/items.js');
const path = require('path');

module.exports = function (app) {
    
     app.post('/api/users', users.login);    
     app.get('/api/users/new', users.getID);
     app.get('/api/users/logout', users.logout);
     app.post('/api/items', items.create);
     app.get('/api/items', items.get);
     app.get('/api/items/:id', items.getItem);
     app.all("*", (req, res, next) => {
         res.sendFile(path.resolve("./public/dist/index.html"));
     })
	

};

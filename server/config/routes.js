const users = require('./../controllers/users.js');
const items = require('./../controllers/items.js');
const path = require('path');

module.exports = function (app) {
    //route for logging in user
    app.post('/api/users', users.login);
    
     //gets ID of user after we store it when they log in
     app.get('/api/users/new', users.getID);

     //route for logging out user
     app.get('/api/users/logout', users.logout);
     
     //route for creating new poll
     app.post('/api/items', items.create);
     
     //gets all polls
     app.get('/api/items', items.get);
 
     //connects back end to front end
     app.all("*", (req, res, next) => {
         res.sendFile(path.resolve("./public/dist/index.html"));
     })
	

};
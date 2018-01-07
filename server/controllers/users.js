const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    login: function (req, res) {
        User.findOne({name: req.body.name}, (err, user) => {
			if(err){
				return res.status(401).json(err)
            }
			else if(user){
				req.session.user = user
				res.json({user: user})
			}
			else{
				let user = new User(req.body);
				user.save((err) => {
					if(err){
						return res.status(401).json(err);
					}
					else{
						req.session.user = user;
						res.json({user: user});
					}
				})
			}
		})
    },

    getID: function (req, res) {
        //uses stored name in session
		if(req.session.user){
			return res.json(req.session.user);
		}
		else{
			return res.status(500).json("User not logged in")
		}
	},

    logout: function (req, res) {
        req.session.destroy()
		return res.json("Logout Successful");
    }


}
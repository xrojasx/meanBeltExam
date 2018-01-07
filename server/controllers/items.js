const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const User = mongoose.model('User');

module.exports = {

    //gets all existing polls
    get: function (req, res) {
        Item.find({}, (err, items) => {
            if(err){
                return res.status(401).json(err);
            }
            return res.json(items);
        })
    },
  
    //create a new poll with each option as a separate variable bound to the newPoll id
    create: function (req, res) {
        var newItems = new Item({title: req.body.title, description: req.body.description});
        newItems.save((err) => {
            if(err){
                console.log("Error saving item.")
                return res.status(500).json(err);
            }
        });
    },

    //grabs poll by ID
    getItem: function (req, res) {
        Poll.findOne({_id: req.params.id}, (err, Item) => {
            if(err) {
                return res.status(401).json(err);
            }
            return res.json(item);
        })
    }, 
}
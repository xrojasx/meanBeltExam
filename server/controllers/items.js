const mongoose = require('mongoose');
const Item = mongoose.model('Item');
const User = mongoose.model('User');

module.exports = {
    index(request, response) {
      console.log('retrieving Items');
      Item.find({})
        .then(function (Items){
          console.log(Items);
          response.json(Items);
        })
        .catch(function (errors){
          console.log(errors);
        })
    },
    create(request, response) {
      User.findById({_id: request.body.owner._id}, function (err, user){
        console.log(request.body.owner)
        const item = new Item(request.body);
        console.log(`created new item: ${item}`);
        console.log(user)
        item.owner = user._id
        item.save()
          .then(function (item){
            user.Items.push(item);
            user.save(function(err) {
              if (err) {
                console.log(err)
              }
              else {
                console.log(`saved ${item} and pushed into ${user}`);
                response.json(item);
              }
            })
          })
          .catch(function (errors){
            console.log(errors)
          })
      })
    },
    list(request, response) {
      console.log('did i make it here')
      Item.find({taggedUser:request.params.id})
        .then(function (Items){
          console.log('list of tagged',Items);
          response.json(Items);
        })
        .catch(function (errors){
          console.log(errors);
        })
    }
  
  }
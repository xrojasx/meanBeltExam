const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//we only need the name for login on this app
const UserSchema = new mongoose.Schema({
	name: {
		type:String,
		required: true
    },
    items: [{
        type: Schema.Types.ObjectId,
        ref: 'Item',
    }]
});
const User = mongoose.model('User', UserSchema)
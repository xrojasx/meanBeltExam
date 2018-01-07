const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new mongoose.Schema({
    owner:{
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 5
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    taggedUser: {
      type: Schema.Types.ObjectId,
      ref: 'TaggedUser',
    },
    done: {
      type: Boolean
    }
  },
    {
      timestamps: true
  });
  
  const Item = mongoose.model('Item', ItemSchema);
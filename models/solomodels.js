const mongoose = require('mongoose')

const SoloUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 24
  },
  score: {
  	type: Number,
  	require: true,
  	max: 9999999999999999999
  }
})

module.exports = mongoose.model('SoloUser', SoloUserSchema)

const mongoose = require('mongoose');
const { Schema } = mongoose;// Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String,
});

const slackUserSchema = new Schema({
  slackId: String,

})

mongoose.model('users', userSchema);
mongoose.model('slackUsers', slackUserSchema);


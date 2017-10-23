const mongoose = require('mongoose');
const { Schema } = mongoose;// Schema = mongoose.Schema

const userSchema = new Schema({
  googleId: String,
  slackUserId: String,
  profileImage: String
});

mongoose.model('users', userSchema);


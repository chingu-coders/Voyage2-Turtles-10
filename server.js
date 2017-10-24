const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const path = require('path');
const axios = require('axios');
const Slack = require('slack-node');
require('./models/User');//the order of require statements is important
require('./services/passport');//we must create the model schema before trying to add a new user

const options = {

};
mongoose.connect(keys.mongoURI, options, function(error) {
  if (error) {
  console.log('mongoose errors: ', error);
  }
});//connect to DB

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/testRoutes')(app);

// temporary slack library example:

// const tempSlackEndpoint = `https://slack.com/api/users.info?token${keys.slackUrlToken}&user=U78BKC8GN&pretty=1`;

// let slack = new Slack(keys.slackUrlToken),
//     slackUserId = {
//       user: "U78BKC8GN"
//     },
//     channel = {
//       channel: "C77CPHMMZ"
//     };

// slack.api('users.info', slackUserId, function(err, res) {
//   // console.log('res: ', res)
// })

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log('app listening on port: ', PORT));
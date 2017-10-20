const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
const path = require('path');
require('./models/User');//the order of require statements is important
require('./services/passport');//we must create the model schema before trying to add a new user

const options = {

}

mongoose.connect(keys.mongoURI, options, function(error) {
  console.log(error);
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


// to serve a static build of the app: npm run build from within the chingu dir
// then start our server from the root: npm run dev...hosted on localhost:3001
// uncomment code below

// app.use(express.static(path.join(__dirname, '/chingwho/build')));

// app.get('/', function(req, res) {
//     res.sendFile(path.resolve(__dirname, '/chingwho/build', 'index.html'));
//   })

const PORT = process.env.PORT || 3001;
app.listen(PORT, console.log('app listening on port: ', PORT));
const passport = require('passport');
const GoogleStrategy  = require('passport-google-oauth20');
const SlackStrategy = require('passport-slack').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');
const SlackUser = mongoose.model('slackUsers');
let passportUser;//set which mongo model gets called based on login strategy

//here we make reference to the user instace created below
//passport attaches the user obj to any http req as well as some functions
passport.serializeUser((user, done) => {
  user.slackId ? passportUser = SlackUser : passportUser = User;  
  // console.log('at serializer: ', user, 'user.slackId: ', user.slackId)
  done(null, user.id);
});

//here we reverse the process by searching the DB for id 
//and calling done on the instance that's returned
passport.deserializeUser((id, done) => {
  SlackUser.findById(id)
    .then(user => {
      // console.log('at deserializer: user', user, ' id: ', id)
      done(null, user);
    });
});

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
  }, (accessToken, refreshToken, profile, done) => {
    User.findOne({ googleId: profile.id })
      .then((existingUser) => {
        if (existingUser) {
          done(null, existingUser);
        } else {
          new User({ googleId: profile.id }).save()//send new user instance to DB
            // alt syntax
            // .then(function(user) {
            //   done(null, user);//null would be the error to report if there was one
            // })
            .then(user => done(null, user));//saved instance is returned and we pass that to done()
        }
      })    
  })
);

passport.use(new SlackStrategy({
  clientID: keys.slackClientID,
  clientSecret: keys.slackClientSecret,
  callbackURL: '/auth/slack/callback',
  proxy: true
}, (accessToken, refreshToken, profile, done) => {
  SlackUser.findOne({ slackId: profile.id })
    .then((existingUser) => {
      if (existingUser) {
        console.log(existingUser)
        done(null, existingUser);
      } else {
        new SlackUser({ slackId: profile.id }).save()
        .then(user => done(null, user));
      }
    })
}));

const passport = require('passport');
const GoogleStrategy  = require('passport-google-oauth20');
const SlackStrategy = require('passport-slack').Strategy
const keys = require('../config/keys');
const mongoose = require('mongoose');

const User = mongoose.model('users');

//here we make reference to the user instace created below
//passport attaches the user obj to any http req as well as some functions
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//here we reverse the process by searching the DB for id 
//and calling done on the instance that's returned
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
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
  console.log('slackpassport, profile: ', profile);
  done(null, profile)
}));

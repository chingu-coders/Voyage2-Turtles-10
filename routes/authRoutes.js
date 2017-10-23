const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']
    })
  );

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get(
    '/auth/slack',
    passport.authenticate('slack', {
      scope: 'identity.basic'
    })
  );

  app.get('/auth/slack/callback', passport.authenticate('slack', { failureRedirect: '/login' }),
    (req, res) => {
      console.log(req, res);
      res.send('logged in')
    // res.redirect('/')
  });

  app.get('/login', function(req, res) {
    res.send('login route');
  })

  app.get('/api/logout', (req, res) => {
    console.log('attempting to log out');
    res.send('loggingout')
    req.logout();//logout is a function attached to req by passport
    //it destroys the cookie for the signed in user
    res.redirect('/');
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })

  
};

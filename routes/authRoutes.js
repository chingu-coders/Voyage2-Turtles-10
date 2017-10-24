const passport = require('passport');

module.exports = (app) => {

  app.get(
    '/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/');
    }
  );

  app.get(
    '/auth/slack',
    passport.authenticate('slack', {
      scope: 'identity.basic'
    })
  );

  app.get('/auth/slack/callback',
  passport.authenticate('slack', { failureRedirect: '/login' }),
    (req, res) => {
    res.redirect('/')
  });

  app.get('/api/current_user', (req, res) => {
    // console.log('made it to route api/current_user, :', req.session)
    res.send(req.user);
  })

  app.get('/api/logout', (req, res) => {
    // console.log('attempting to log out');
    req.logout();//logout is a function attached to req by passport
    //it destroys the cookie for the signed in user
    res.redirect('/');
  })
};

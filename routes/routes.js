var appRouter = function(app) {
  app.get("/test", function(req, res) {
    res.send("Hello World");
  });
  app.get('/send-auth', function(req, res) {
    res.write('working');
    res.end()
    // console.log('req.body: ', req, 'res.body: ', res)
  })
}
  
  module.exports = appRouter;
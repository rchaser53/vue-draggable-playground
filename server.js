const webPush = require('web-push');

const GCM_API_KEY = 'AAAAxTLtxto:APA91bEVTLDhW2KtdMMRH8O4ZLXh-b0Zw6Z91LDYJVh71MtITG3UMAp89kxvL9w57Dus-4kPJLMRHq8aAiCofl_YHywBswU0WXbwlHp9ju2H_o2UzcM08NRRjYelVqlItV8EmuIwwzZb';
webPush.setGCMAPIKey(GCM_API_KEY);

// webPush.setGCMAPIKey(process.env.GCM_API_KEY);

module.exports = function(app, route) {
  app.post(route + 'register', function(req, res) {

    res.sendStatus(201);
  });

  app.post(route + 'sendNotification', function(req, res) {
    setTimeout(function() {
      webPush.sendNotification({
        endpoint: req.query.endpoint,
        TTL: req.query.ttl,
      })
      .then(function() {
        res.sendStatus(201);
      })
      .catch(function(error) {
        res.sendStatus(500);
        console.log(error);
      });
    }, req.query.delay * 1000);
  });
};
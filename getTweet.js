var Twit = require('twit');
var config = require('./config');



var T = new Twit(config);

T.get('search/tweets', { q: 'sanders', count: 2}, function(err, data, res) {
  var tweets = data.statuses;
  // instead of using a for loop use filter, it's gorgeous!
  tweets.filter(function(data) {
    console.log(data.text);
  });
});


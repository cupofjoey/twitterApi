var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var stream = T.stream('user');

stream.on('follow', followed);

function followed(eventMsg) {
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  reply('@' + screenName + ' thanks for following me! I\'m a bot..' + 
    ' I hope this doesn\'t make things weird')
}

function reply(txt) {
  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, function(err, data, res) {
    if(err) {
      throw err;
    }
    console.log('Someone followed you!')
  })
}
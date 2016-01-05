var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);
T.post('statuses/update', { status: 'my first tweet from nodejs! #nodejs '}, 
        function(err, data, res) {
          if(err) {
            throw err;
          }
          console.log(data);
        })
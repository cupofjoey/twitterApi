var Twit = require('twit');
var config = require('./config');
var fs = require('fs');

var T = new Twit(config);

var stream = T.stream('statuses/filter', { track: 'sanders'})


var streaming = function() {
	var count = 0;

	function increment() {
		count ++;
	};

	stream.on('tweet', function(tweet) {
		console.log(tweet.text)
		if(tweet) {
			increment();

		}

		fs.writeFile('tweetCount.txt', count, function(err) {
			if(err) {
				throw err;
			}
		})
	})
}

streaming();
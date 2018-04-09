'use strict';

const superagent = require('superagent');

require('../config');

exports.getcrypto = function(args, res, next) {
  /**
   * Get the cryptocurrency value in €
   * 
   *
   * returns OutputMessages
   **/
    var toReturn = {};
    toReturn['application/json'] = {
        "messages":""
    };

	var crypto = args.body.value.currency;
	if (!crypto) {
		res.statusMessage = "Service unavailable";
        res.statusCode = 503;
		res.end(JSON.stringify(toReturn[Object.keys(toReturn)[0]] || {}, null, 2));
		return;
	}
    
    superagent.get('https://api.coinmarketcap.com/v1/ticker/' + crypto + '/?convert=EUR')
    .end((r_err, r_res) => {
        res.setHeader('Content-Type', 'application/json');
        if (r_err) {
            console.log(r_err.body);
            res.statusMessage = "Service unavailable";
            res.statusCode = 503;
        }
        else {
			if (!r_res || !r_res.body) {
				res.statusMessage = "Service unavailable";
	            res.statusCode = 503;
				console.log(r_res.body);
			}
			else {
				var value = Number.parseFloat(parseFloat(r_res.body[0].price_eur)).toFixed(2);
	            toReturn[Object.keys(toReturn)[0]].messages = 'La cryptomonnaie ' + crypto + ' vaut actuellement ' + value + ' euros.';
			}
        }
        res.end(JSON.stringify(toReturn[Object.keys(toReturn)[0]] || {}, null, 2));
    });
};

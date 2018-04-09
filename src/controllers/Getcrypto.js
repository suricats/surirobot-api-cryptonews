'use strict';

var url = require('url');

var Getcrypto = require('./GetcryptoService');

module.exports.getcrypto = function getcrypto (req, res, next) {
  Getcrypto.getcrypto(req.swagger.params, res, next);
};

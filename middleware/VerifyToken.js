var jwt = require('jsonwebtoken');
var config = require('../config/config');

function verifyToken(req, res, next) {
  var token = req.headers['authorization'];
  if (token.startsWith('Bearer ')) {
    // Remove Bearer from string
    token = token.slice(7, token.length).trimLeft();
  }
  if (!token)
    return res.status(401).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.secret, function (err, decoded) {
    if (err)
      return res.status(401).send({ auth: false, eroor: err, message: 'Failed to authenticate token.' });
    // if everything good, save to request for use in other routes
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;
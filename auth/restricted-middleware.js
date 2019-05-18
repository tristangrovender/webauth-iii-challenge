const jwt = require('jsonwebtoken'); // <<<

const secrets = require('../config/secrets.js'); // <<<

module.exports = (req, res, next) => {
  const token = req.headers.authorization; // <<< attach token as header

  jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
    if (err) {
      // token is not valid or expired for some reason
      res.status(401).json({ you: 'shall not pass!!!' });
    } else {
      // the token is valid and we can read the decodedToken
      req.decodedToken = decodedToken;

      next();
    }
  });
};

// for checkRole middleware...
// users *----* roles *---* permissions

const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, checkRole('student'), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

// Middleware to give access to certain resources for specific roles on login
function checkRole(role) {
  return function(req, res, next) {
    if (
      req.decodedToken &&
      req.decodedToken.roles &&
      req.decodedToken.roles.includes(role)
    ) {
      next();
    } else {
      res.status(403).json({ message: "can't touch this!" });
    }
  };
}


module.exports = router;

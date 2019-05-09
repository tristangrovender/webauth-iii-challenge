const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

//Something is broken here, need to add "checkRole('department')," back to line 6

// Middleware to give access to certain resources for specific roles on login
// function checkRole(department) {
//   return function(req, res, next) {
//     if (
//       req.decodedToken &&
//       req.decodedToken.users &&
//       req.decodedToken.users.includes(department)
//     ) {
//       next();
//     } else {
//       res.status(403).json({ message: "can't touch this!" });
//     }
//   };
// }


module.exports = router;

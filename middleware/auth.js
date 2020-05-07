const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header('x-auth-token');

  //   Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token. Authorization Denied' });
  }

  //   Verify token
  try {
    const decoded = jwt.verify(token, config.get('JWT_SECRET'));

    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

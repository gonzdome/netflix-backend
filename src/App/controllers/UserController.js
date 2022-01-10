const User = require('../models/User');

class UserController {
  async store(req, res) {
    try {
      const user = req.body;
      // returns whole info from requisition body;

      const checkUser = await User.findOne(user);
      // returns whole info from db;

      if (checkUser) {
        return res.json({ error: false, message: checkUser });
      }
      return res.json({
        error: true,
        message: 'Invalid Username or Password!',
      });
    } catch (err) {
      return res.json({ error: true, message: err.message });
    }
  }
}

module.exports = new UserController();

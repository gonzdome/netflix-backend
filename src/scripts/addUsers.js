require('../database');

const User = require('../App/models/User');
const userJSON = require('../data/user.json');

const addUsers = async () => {
  try {
    const users = userJSON.map((user) => new User(user).save());
    return users;
  } catch (err) {
    return console.log({ message: err.message });
  }
};

addUsers();

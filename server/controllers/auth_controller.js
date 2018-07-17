const swag = require('../models/swag');
let id = 1+1;

module.exports = {
  login: (req, res, next) => {
    const { session } = req;
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (users) {
      session.user.username = user.username;
      res.status(200).send(session.user);
    }else {
      res.status(500).send('Unauthorized user.');
    }
  },
  register: (req, res, next) => {
    const {session} = req;
    const {username, password} = req.body;

    users.push({id, name, password});
    id++;

    session.user.username = username;

    res.status(200).send(session.user);
  },
  signout: (req, res, next) => {

  },
  getUser: (req, res, next) => {
    const { session } = req;
    res.status(200).send(session.user);
  }
}
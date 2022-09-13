const User = require('../models/user');

function getUserById(req, res) {
  const id = req.params.userId;

  User.findById(id)
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((error) => {
      res.status(500).send({ message: `${error.name} :: ${error.message}` });
    });
}

function postNewUser(req, res) {
  const { name, email } = req.body;

  User.create({ name, email }, { unique: true })
    .then((user) => {
      res.status(200).send({ data: user });
    })
    .catch((error) => {
      if (error.name === 'MongoServerError') {
        return res.status(400).send({ message: 'This name or email ready to use!' });
      }
      return res.status(500).send({ message: `${error.name} :: ${error.message}` });
    });
}

module.exports = { getUserById, postNewUser };

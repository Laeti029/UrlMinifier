const User = require('../models/User');

/**
 * Permet la verification des emails
 * @param {String} email 
 */
const emailValidator = (email) => {
  let result = false;

  if (typeof (email) === "string" && email.length > 0 && email.match(/^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/i)) {
    result = true;
  }

  return result;
};

/**
 * Permet la verification des passwords
 * @param {String} password 
 */
const passwordValidator = (password) => {
  let result = false;

  if (typeof (password) === "string" && password.length > 0 && password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!?#]).{5,}/)) {
    result = true;
  }

  return result;
};

/**
 * Permet l'ajout d'un utilisateur
 * @param {Object} body 
 * @param {Function} callback 
 */
const addUser = (body, done) => {
  console.log(body);
  let user = new User();
  let response = {
    result: true,
    errors: []
  };

  user.email = body.email;
  user.password = body.password;

  if (!emailValidator(user.email)) {
    response.errors.push("L'email ne respecte pas les normes");
    response.result = false;
  }

  if (!passwordValidator(user.password)) {
    response.errors.push("Le mot de passe ne respecte pas les normes");
    response.result = false;
  }

  if (response.result) {
    user.save((err) => {
      if (err)
        result.errors.push(err);

      done(response);
    });
  } else {
    done(response);
  }
};

/**
 * Permet la recuperation d'un user
 * @param {Object} body 
 * @param {Function} callback
 */
const getUser = (body, response) => {
  User.findOne({
    email: body.email,
    password: body.password
  }, (err, foundUser) => {
    if (!err && foundUser) {
      response(foundUser);
    } else {
      console.log('User not found');
      response(false);
    }
  });
};

module.exports = {
  emailValidator,
  passwordValidator,
  addUser,
  getUser
};
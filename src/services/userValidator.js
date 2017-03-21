module.exports = {
<<<<<<< HEAD
  emailValidator: function () {
    return true;
  },
  passwordValidator: function () {
    return true;
=======
  emailValidator: function (email) {
    if (email != "") {
      return true;
    } else {
      return false;
    }
  },
  passwordValidator(password) {
    if (password === "1233456") {
      return true;
    } else {
      return false;
    }
  },
  register(email, password) {
    if (passwordValidator(password) && emailValidator(password)){
      return true;
    } else {
      return false;
    }
>>>>>>> develop
  }
};

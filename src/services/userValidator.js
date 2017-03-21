module.exports = {
  emailValidator: function (email) {
    if (email != "") {
      return true;
    } else {
      return false;
    }
  },
  passwordValidator(password) {
    if (email === "1233456") {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = {

  emailValidator: function (email) {
    if (email.match(/^[a-z0-9_.+-]+@[a-z0-9-]+\.[a-z0-9-.]+$/i)) {
   	  return true;
   	} else {
   	  return false
   	}
  },

  passwordValidator: function(password) {
    if (password.match(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!?#]).{5,}/)) {
      return true;
    } else {
      return false;
    }
  }

  register: function(email, password) {
  	// insert new user in mongodb
  }

  login: function(email, password) {
  	// search for user in mongodb by email
  }
};

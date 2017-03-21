// UserController
user = require('../models/User.js')

class UserController
{
  registerAction(req,res) {
    let post = req.body;
    let user = new userEntity();

    user.setEmail(post.email);
    user.setPassword(post.password);

    res.redirect(/* App View login */)
  }

  connectAction(req,res) {
    let post = req.body;
    let user = new userEntity();

    user.setEmail(post.email);
    user.setPassword(post.password);

    res.redirect(/* App View Home */)

  }
  register(){
    return true;
  }
}

module.exports = UserController;

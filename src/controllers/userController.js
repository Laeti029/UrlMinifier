// UserController
const User = require('../models/User.js')

class UserController
{
  registerAction(req,res) {
    let post = req.body;
    let user = new User();


    user.setEmail(post.email);
    user.setPassword(post.password);
    console.log(user);
    console.log(res);
    res.send(true);
  }

  connectAction(req,res) {
    let post = req.body;
    let user = new User();

    user.setEmail(post.email);
    user.setPassword(post.password);

    res.redirect(/* App View Home */)

  }
  register(){
    return true;
  }
}

module.exports = UserController;

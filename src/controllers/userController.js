// UserController
user = require('./models/Users.js')

class UserController
{
  registerAction(req,res) {
    let post = req.body;
    let userEntity = new userEntity();

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

  register(email, password){
    return true
  }

}

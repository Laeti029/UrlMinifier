// UserController
userEntity = require('./models/UserEntity.js')

class UserController
{
  registerAction(req,res) {
    let post = req.body;
    let userEntity = new userEntity();

    userEntity.setEmail(post.email);
    userEntity.setPassword(post.password);

    res.redirect(/* App View login */)
  }

  connectAction(req,res) {
    let post = req.body;
    let userEntity = new userEntity();

    userEntity.setEmail(post.email);
    userEntity.setPassword(post.password);

    res.redirect(/* App View Home */)

  }
}

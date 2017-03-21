const UserController = require("../../controllers/userController");
const UserModel = require("../../models/User");

const usrCtrl = new UserController();

/* Fonction register */
describe("register", function () {
  //var user = new UserModel(0, "test@test.fr", "Test123456789");
  //spyOn(user, "setEmail");


  it("Test de la fonction register - cas nominal", function () {
    let req = {}, res = {};
    req.body = {};

    req.body.email = "test@test.fr";
    req.body.password = "Test123456789";
    console.log(usrCtrl.registerAction);
    usrCtrl.registerAction(req, res);
    //expect(user.setEmail).toHaveBeenCalled();
  });
});
/*
  it("Test de la fonction register - email manquant", function () {
    let register = registerAction();
    let result = register.length > 20;
    expect(result).toBe(false);
  });

  it("Test de la fonction register - password manquant", function () {
    let register = registerAction();
    let result = register.length > 20;
    expect(result).toBe(false);
  });*/

/* Fonction connect */
/*describe("connect", function () {
  it("Test de la fonction register - cas nominal", function () {
    let connect = connectAction();
    let result = connect.length > 20;
    expect(result).toBe(true);
  });

  it("Test de la fonction register - email manquant", function () {
    let connect = connectAction();
    let result = connect.length > 20;
    expect(result).toBe(false);
  });

  it("Test de la fonction register - password manquant", function () {
    let connect = connectAction();
    let result = connect.length > 20;
    expect(result).toBe(false);
  });
});*/

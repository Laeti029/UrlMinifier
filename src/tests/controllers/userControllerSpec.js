let userController = require("../../controllers/userController");
const User = require("../../models/User");


/* Fonction register */
describe("register", function () {
  it("Test de la fonction register - cas nominal", function () {
    let uc = new userController();
    let user = new User(1,"plop","plop");
    console.log(user.setId(2));
    let result = register.length > 20;
    expect(result).toBe(false);
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
});

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

let userValidator = require("../../controllers/userController");

/* Fonction register */
describe("register", function () {
  it("Test de la fonction register - cas nominal", function () {
    let register = registerAction();
    let result = register.length > 20;
    expect(result).toBe(true);
  });

  it("Test de la fonction register - email manquant", function () {
    let register = registerAction();
    let result = register.length > 20;
    expect(result).toBe(false);
  });

  it("Test de la fonction register - password manquant", function () {
    let register = registerAction();
    let result = register.length > 20;
    expect(result).toBe(false);
  });
});

/* Fonction connect */
describe("connect", function () {
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
});

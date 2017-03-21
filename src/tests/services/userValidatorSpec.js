let userValidator = require("../services/userValidator");

/* Fonction emailValidator */
describe("emailValidator", function () {  
  it("Test de la fonction emailValidator - Cas Nominal", function () {
    let email = "test@test.com";

    let verification = userValidator.emailValidator(email);
    expect(verification).toBe(true);
  });

  it("Test de la fonction emailValidator - Cas input null", function () {
    let email = "";

    let verification = userValidator.emailValidator(email);
    expect(verification).toBe(false);
  });

  it("Test de la fonction emailValidator - Cas KO", function () {
    let email = "frefbzpieguhgoijrzegpi.com";

    let verification = userValidator.emailValidator(email);
    expect(verification).toBe(false);
  });
});
  
/* Fonction passwordValidator */
describe("passwordValidator", function () {  
  it("Test de la fonction passwordValidator - Cas Nominal", function () {
    let password = "Test123456789";

    let verification = userValidator.passwordValidator(password);
    expect(verification).toBe(true);
  });

  it("Test de la fonction passwordValidator - Cas input null", function () {
    let password = "";

    let verification = userValidator.passwordValidator(password);
    expect(verification).toBe(false);
  });

  it("Test de la fonction passwordValidator - Cas KO", function () {
    let password = "test";

    let verification = userValidator.passwordValidator(password);
    expect(verification).toBe(false);
  });
});

/* Fonction passwordCheck */  
describe("passwordCheck", function () {    
  it("Test de la fonction passwordCheck - Cas Nominal", function () {
    let user = "user";
    let password = "12345679";
    
    var connexion = userValidator.passwordCheck(user, password);
    expect(connexion).toBe(true);
  });

  it("Test de la fonction passwordCheck - Cas inputs nulls", function () {
    let user = "";
    let password = "";
    
    var connexion = userValidator.passwordCheck(user, password);
    expect(connexion).toBe(false);
  });

  it("Test de la fonction passwordCheck - Cas user null", function () {
    let user = "";
    let password = "123456789";
    
    var connexion = userValidator.passwordCheck(user, password);
    expect(connexion).toBe(false);
  });

  it("Test de la fonction passwordCheck - Cas password null", function () {
    let user = "user";
    let password = "";
    
    var connexion = userValidator.passwordCheck(user, password);
    expect(connexion).toBe(false);
  });
});

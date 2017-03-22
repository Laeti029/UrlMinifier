let userService = require("../../services/userService");

/* Fonction emailValidator */
describe('emailValidator', function () {
  it('Test de la fonction emailValidator - Cas Nominal', function () {
    let email = "test@test.com";

    let verification = userService.emailValidator(email);
    expect(verification).toBe(true);
  });

  it('Test de la fonction emailValidator - Cas input null', function () {
    let email = "";

    let verification = userService.emailValidator(email);
    expect(verification).toBe(false);
  });

  it('Test de la fonction emailValidator - Cas KO', function () {
    let email = "frefbzpieguhgoijrzegpi.com";

    let verification = userService.emailValidator(email);
    expect(verification).toBe(false);
  });
  it('Test de la fonction emailValidator - Cas OK', function () {
    let email = "email@email.com";

    let verification = userService.emailValidator(email);
    expect(verification).toBe(true);
  });
});

/* Fonction passwordValidator */
describe('passwordValidator', function () {
  it('Test de la fonction passwordValidator - Cas Nominal', function () {
    let password = "Test123456789#";

    let verification = userService.passwordValidator(password);
    expect(verification).toBe(true);
  });

  it('Test de la fonction passwordValidator - Cas input null', function () {
    let password = "";

    let verification = userService.passwordValidator(password);
    expect(verification).toBe(false);
  });

  it('Test de la fonction passwordValidator - Cas KO', function () {
    let password = "test";

    let verification = userService.passwordValidator(password);
    expect(verification).toBe(false);
  });
});

/* Fonction addUser */
describe('addUser', function () {
  it('Test de la fonction addUser - Cas Nominal', () => {
    let body = {
      email: "test@test.fr",
      password: "Test123456789#"
    };

    userService.addUser(body, (result) => {
      expect(result.data).toBe(true);
    });
  });

  it('Test de la fonction addUser - Cas null', () => {
    let body = {
      email: "",
      password: ""
    };

    userService.addUser(body, (result) => {
      expect(result.data).toBe(false);
      expect(result.errors.length).toBe(2);
    });
  });

  it('Test de la fonction addUser - Cas KO', () => {
    let body = {
      email: "test@test.com",
      password: "datagezgzgz484"
    };

    userService.addUser(body, (result) => {
      expect(result.data).toBe(false);
      expect(result.errors.length).toBe(1);
    });
  });

/* Fonction getUser */
/*describe("getUser", function () {

  it("Test de la fonction getUser - Cas Nominal", () => {
    let body = {
      email: "test@test.fr",
      password: "test"
    };

    userService.getUser(body, (data) => {
      console.log(data);
      expect(data).toBe(true);
    });
  });
*/
});

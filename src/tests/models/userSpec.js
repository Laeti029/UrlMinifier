let User = require("../../models/User");

/* Model User */
describe("userModel", function () {  
  it("Test du userModel - Cas Nominal", function () {
    let test = new User(2, "email", "password");

    expect(test.getId()).toBe(2);
    expect(test.getEmail()).toBe("email");
    expect(test.getPassword()).toBe("password");
  });

  it("Test du userModel - Cas Nominal", function () {
    let test = new User();

    expect(test.getId()).toBe(undefined);
    expect(test.getEmail()).toBe(undefined);
    expect(test.getPassword()).toBe(undefined);
  });

  it("Test du userModel - Cas Nominal", function () {
    let test = new User(2, "", "");

    expect(test.getId()).toBe(2);
    expect(test.getEmail()).toBe("");
    expect(test.getPassword()).toBe("");
  });

});
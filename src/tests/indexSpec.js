var calculator = require("../controllers/indexCtrl");

describe("multiplication", function () {
  it("should multiply 3 and 5", function () {
    var product = calculator.multiply(3, 5);
    expect(product).toBe(15);
  });
});
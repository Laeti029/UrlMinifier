let indexCtrl = require("../controllers/indexController");

describe("multiplication", function () {
  it("should multiply 2 and 3", function () {
    var product = indexCtrl.multiply(2, 3);
    expect(product).toBe(15);
  });
});

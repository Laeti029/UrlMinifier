const urlValidator = require('../../services/urlValidator');

describe('Test de la fonction inputUrlValidator', () => {
  it(' => Cas nominal', () => {
    let url = "http://www.wellformedurl.com";

    let verification = urlValidator.inputUrlValidator(url);
    expect(verification).to.equal(false);
  });
  it(' => Cas input null', () => {
    let url = "";

    let verification = urlValidator.inputUrlValidator(url):
    expect(verification).to.equal(false);
  });
  

});

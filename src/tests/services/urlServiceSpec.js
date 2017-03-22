const urlService = require('../../services/urlService');

describe('Test fonction inputUrlValidator', () => {
  it('doit accepter une url bien formée', () => {
    let url = "https://www.wellformedurl.com";
    let verification = urlService.inputUrlValidator(url);
    expect(verification).toBe(true);
  });
  it(' ne doit pas accepter un champ nul', () => {
    let url = "";

    let verification = urlService.inputUrlValidator(url);
    expect(verification).toBe(false);
  });
  it(' => Cas de mauvais protocole', () => {
    let url = "ftp://mega.up"

    let verification = urlService.inputUrlValidator(url);
    expect(verification).toBe(false);
  });
});


/*
describe('Test de la fonction inputUrlValidator', () => {
  it(' => Cas URL bien formée', () => {
    let url = "http://www.wellformedurl.com";

    let verification = urlValidator.inputUrlValidator(url);
    expect(verification).toBe(true);
  });


  it(' => Cas de caractère interdit', () => {
    let url = "http://www.;/&=+$#@.fr"

    let verification = urlValidator.inputUrlValidator(url);
    expect(verification).toBe(false)
  });

});
*/

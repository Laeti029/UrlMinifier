const urlService = require('../../services/urlService');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

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

// Test de la fonction encode()
describe('La fonction encode', () => {
  it(' doit accepter un Int en entrée', () => {
    let num = getRandomInt(100, 15000);
    let verification = urlService.encodeUrl(num);
    expect(verification).toMatch(/\w+/);
  });
});

// Test de la fonction addUrl
/**
describe('La fonction addUrl', () => {
  it(' doit renvoyer une response valide', () => {
    const body = {
      base: "http://www.wellformedurl.com"
    }
    const response = {
      data: true,
      errors: []
    }
    let verification = urlService.addUrl(body, res);
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

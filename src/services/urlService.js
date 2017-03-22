const Url = require('../models/Url');
const alphabet = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
const base = alphabet.length; // base is the length of the alphabet (58 in this case)

var num = 100000;

const inputUrlValidator = (url) => {
    let result = false;
    if(url.match(/^https?:\/\/(w{3}\.)?[\w-]{1,}\.[a-z]{1,}(\/?[\w-=?_.]{1,})*/)){
      result = true;
    }
    return result;
};

/**
 * Permet l'ajout d'une url
 * @param {Object} body
 * @param {Function} callback
 */
const addUrl = (body, done) => {
  let url = new Url();
  let response = {
    data: true,
    errors: []
  };

  url.urlBase = body.urlBase;
  url.userId = body.userId;
  url.urlMinify = encodeUrl(num);  

  if(!inputUrlValidator(url.urlBase)) {
    response.errors.push("L'url n'est pas valide");
    response.data = false;
  };

  if (response.data) {
    url.save((err, url) => {
      if (err)
        result.errors.push(err);

      done(response);
    });
  } else {
    console.log(url.userId);
    done(response);
  }
};

const encodeUrl = (num) => {
  var encoded = '';
  while (num){
    let remainder = num % base;
    num = Math.floor(num / base);
    encoded = alphabet[remainder].toString() + encoded;
  }
//  console.log(encoded);
  return encoded;
};

const getUrl = (body, response) =>{
  Url.find({}, (err, foundUrls) => {
    if(!err && foundUrls) {
      response(foundUrls);
    } else {
      console.log('Urls not found');
      response(false);
    };
  });
};

module.exports = {
  inputUrlValidator,
  addUrl,
  encodeUrl,
  getUrl
}


/**
module.exports = {
  inputUrlValidator: function (url) {
        return true;
    }
      return false;
  },

  urlMinifierValidator: function(url){
    return true;
  },

  addUrl: function(url){
    return true;
  },

  getUrl: function(){
    return list;
  },

  removeUrl: function(id){
    return true;
  },
}
**/

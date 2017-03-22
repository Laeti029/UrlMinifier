const Url = require('../models/Url');


const inputUrlValidator = (url) => {
    let result = false;
    if(url.match(/^https?:\/\/(w{3}\.)?[\w-]{1,}\.[a-z]{1,}(\/?[\w-=?_.]{1,})*/))
    {
      result = true;
    }
    return result;
};






module.exports = {
  inputUrlValidator
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

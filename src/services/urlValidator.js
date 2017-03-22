module.exports = {
  inputUrlValidator: function (url) {
    if(url === '^https?:\/\/(w{3}\.)?[\w-]{1,}\.[a-z]{1,}(\/?[\w-=?_.]{1,})*'){
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

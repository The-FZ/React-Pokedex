var axios = require('axios');

module.exports = {
  getPokemon:function(url){
    return axios.get(url).then(function(response){
      return response;
    });
  },
  // getAllpokemonData:function(arr){
  //   var data  = [];
  //   arr.forEach(url=>{
  //     return axios.get(url).then(function(response){
  //
  //     })
  //   })
  // }

}

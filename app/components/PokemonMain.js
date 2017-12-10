var React = require('react');
var createReactClass = require('create-react-class');
var PokemonList = require('PokemonList');
var PokemonAPI = require('PokemonAPI');
var axios = require('axios');
var Navbar=require('Navbar');


var PokemonMain = createReactClass({
  getInitialState:function(){
    return {
    baseURL:"https://pokeapi.co/api/v2/pokemon/?limit=20",
    previous:null,
    next:null,
    pokemonURLs:[],
    pokemons:[],
    }
  },

  componentDidMount:function(){
    this.updatePokemonState(this.state.baseURL);
  },

  onHandleClickNext:function(){
    this.setState({
      pokemons:[],
      pokemonURLs:[],
    });

    if(this.state.next!==null){
      this.updatePokemonState(this.state.next);
    }
    else{
      this.updatePokemonState(this.state.baseURL);
    }
  },

  onHandleClickPrevious:function(){
    this.setState({
      pokemons:[],
      pokemonURLs:[],
    });

    if(this.state.previous!==null){
      this.updatePokemonState(this.state.previous);
    }
    else{
      this.updatePokemonState(this.state.baseURL);
    }
  },

  updatePokemonState:function(url){
    var that = this;
    axios.get(url).
    then(function(response){

      var next = response.data.next;
      var previous = response.data.previous;
      var responseData  = response.data.results;
      var pokemonAllurls = [];
      responseData.forEach(pokemon=>{
        pokemonAllurls.push(pokemon.url);
      });
      var pokemonDetails=[];
      pokemonAllurls.forEach(url=>{
        axios.get(url).
        then(function(response){
          that.setState(prevState=>({
            pokemons:[...prevState.pokemons,response.data],
          }));
        });
      });

      that.setState({
        next:next,
        previous:previous,
        pokemonURLs:pokemonAllurls,
      });

    });
  },

  render:function(){
    return (
      <div className='pokemon-main'>
        <Navbar/>
        <PokemonList pokemonList={this.state.pokemons}
        onHandleClickNext={this.onHandleClickNext}
        onHandleClickPrevious={this.onHandleClickPrevious}/>
      </div>
    );
  }
});

module.exports = PokemonMain;

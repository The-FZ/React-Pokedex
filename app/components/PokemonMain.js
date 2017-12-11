var React = require('react');
var createReactClass = require('create-react-class');
var PokemonList = require('PokemonList');
var PokemonAPI = require('PokemonAPI');
var axios = require('axios');
var Navbar=require('Navbar');
var LoadingData = require('LoadingData');
var Filter = require('Filter');


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

  handleChange:function(url){
    var url = url;
    var that = this;
    axios.get(url).
    then(function(response){
      var responseData = response.data.pokemon;
      var pokemonTypeURLs = [];
      responseData.forEach(pokemon=>{
        pokemonTypeURLs.push(pokemon.pokemon.url);
      });

      that.setState({
        pokemonURLs:[],
        pokemons:[],
      });

      pokemonTypeURLs.forEach(url=>{
        axios.get(url).
        then(function(response){
            that.setState(prevState=>({
            pokemons:[...prevState.pokemons,response.data],
          }));
        });
      });

    });
  },
  handleOnSubmit:function(name){
      console.log(name);
  },

  render:function(){

    var renderPokemonList=()=>{
      if(this.state.pokemons.length>=20){
        return <PokemonList pokemonList={this.state.pokemons}
        onHandleClickNext={this.onHandleClickNext}
        onHandleClickPrevious={this.onHandleClickPrevious}/>;
      }
      else{
        return <LoadingData time={this.state.pokemons.length}/>;
      }
    };

    return (
      <div className='pokemon-main'>
        <Navbar/>
        <Filter handleChange={this.handleChange} handleOnSubmit={this.handleOnSubmit}/>
        {renderPokemonList()}
      </div>
    );
  }
});

module.exports = PokemonMain;

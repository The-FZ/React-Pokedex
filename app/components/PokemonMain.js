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
    pokemons:[],
    allpokemons:[]
    }
  },

  componentDidMount:function(){
    this.storeAllPokemon(this.state.baseURL);
    this.updatePokemonState(this.state.baseURL);
  },

  onHandleClickNext:function(){
    this.setState({
      pokemons:[],
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
      var nameInLowerCase = name.toLowerCase();
      var that = this;
      this.state.allpokemons.forEach(pokemon=>{
        if(nameInLowerCase === pokemon.name){
          axios.get(pokemon.url).
          then(function(response){
            that.setState({
              pokemons:[response.data]
            });
          });
        }
      });
  },

  storeAllPokemon:function(url){
    var that = this;
    axios.get(url).
    then(function(response){
      that.setState(prevState=>{
        allpokemons:prevState.allpokemons.push(...response.data.results)
      });
      if(response.data.next!==null){
        that.storeAllPokemon(response.data.next);
      }
    });
  },

  render:function(){

    var renderPokemonList=()=>{
      if(this.state.pokemons.length>=1){
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

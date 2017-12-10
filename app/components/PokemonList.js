var React = require('react');
var PokemonListItem = require('PokemonListItem');
var Next = require('Next');
var Previous = require('Previous');


var PokemonList=({pokemonList,onHandleClickNext,onHandleClickPrevious})=>{

  return (
    <div className='pokemon-list'>
    <div>
    {
      pokemonList.map(pokemon=>{
        return <PokemonListItem pokeData ={pokemon} key={pokemon.id}/>
      })
    }
    </div>

    <div>
      <Previous onClickPrevious={onHandleClickPrevious}/>
      <Next onClickNext={onHandleClickNext}/>
    </div>
    </div>
  );
};

module.exports = PokemonList;

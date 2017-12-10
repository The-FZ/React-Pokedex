var React = require('react');
var PokemonListItem = require('PokemonListItem');


var PokemonList=({pokemonList})=>{

  return (
    <div className='pokemon-list'>
    {
      pokemonList.map(pokemon=>{
        return <PokemonListItem pokeData ={pokemon} key={pokemon.id}/>
      })
    }
    </div>
  );
};

module.exports = PokemonList;

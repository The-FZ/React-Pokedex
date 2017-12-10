var React = require('react');
var Avatar =require('Avatar');
var Stats = require('Stats');


var PokemonListItem =({pokeData})=>{

  return (
    <div className='pokemonList-item'>
      <Avatar imgURL={pokeData.sprites.front_default} name={pokeData.name}/>
      <Stats pokemonData={pokeData}/>
    </div>
  );
};

module.exports= PokemonListItem;

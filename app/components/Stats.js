var React  = require('react');
var Name = require('Name');
var Height = require('Height');
var Weight = require('Weight');
var Type = require('Type');
var Abilities = require('Abilities');


var Stats=({pokemonData})=>{
  return (
    <div className='stats'>
      <div className='statsData'>
          <Name name={pokemonData.name}/>
          <Height height={pokemonData.height}/>
          <Weight weight={pokemonData.weight}/>
          <Type types={pokemonData.types}/>
          <Abilities abilities={pokemonData.abilities}/>
      </div>
    </div>
  );
}

module.exports = Stats;

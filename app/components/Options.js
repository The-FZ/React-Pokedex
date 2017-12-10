var React = require('react');

var Options = ({handleChange})=>{

  var onSelect=()=>{
    var types = document.getElementById('types');
    // alert(types.value);
    handleChange(types.value);
  };

  return (
    <div>
    <select id='types' onChange={onSelect}>
      <option value='https://pokeapi.co/api/v2/type/1/'>Normal</option>
      <option value='https://pokeapi.co/api/v2/type/2/'>Fighting</option>
      <option value='https://pokeapi.co/api/v2/type/3/'>Flying</option>
      <option value='https://pokeapi.co/api/v2/type/4/'>Poison</option>
      <option value='https://pokeapi.co/api/v2/type/5/'>Ground</option>
      <option value='https://pokeapi.co/api/v2/type/6/'>Rock</option>
      <option value='https://pokeapi.co/api/v2/type/7/'>Bug</option>
      <option value='https://pokeapi.co/api/v2/type/8/'>Ghost</option>
      <option value='https://pokeapi.co/api/v2/type/9/'>Steel</option>
      <option value='https://pokeapi.co/api/v2/type/10/'>Fire</option>
      <option value='https://pokeapi.co/api/v2/type/11/'>Water</option>
      <option value='https://pokeapi.co/api/v2/type/12/'>Grass</option>
      <option value='https://pokeapi.co/api/v2/type/13/'>Electric</option>
      <option value='https://pokeapi.co/api/v2/type/14/'>Psychic</option>
      <option value='https://pokeapi.co/api/v2/type/15/'>Ice</option>
      <option value='https://pokeapi.co/api/v2/type/16/'>Dragon</option>
      <option value='https://pokeapi.co/api/v2/type/17/'>Dark</option>
      <option value='https://pokeapi.co/api/v2/type/18/'>Fairy</option>
    </select>
    </div>
  );
};

module.exports = Options;

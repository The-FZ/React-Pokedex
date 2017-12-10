var React = require('react');

var Abilities=({abilities})=>{

  return (
    <div className="ability">
      Abilities - {
        abilities.map((ability,index)=>{
          if(index!==abilities.length-1){
            return <span key={index}>{ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1)} , </span>
          }
          else{
            return <span key={index}>{ability.ability.name[0].toUpperCase()+ability.ability.name.slice(1)}</span>
          }
        })
      }
    </div>
  );
};

module.exports = Abilities;

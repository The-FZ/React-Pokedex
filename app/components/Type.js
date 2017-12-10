var React = require('react');

var Type=({types})=>{

  return (
    <div className="type">
      Type - {
        types.map((type,index)=>{
          if(index!==types.length-1){
            return <span key={index}>{type.type.name[0].toUpperCase()+type.type.name.slice(1)} , </span>
          }
          else{
            return <span key={index}>{type.type.name[0].toUpperCase()+type.type.name.slice(1)}</span>
          }
        })
      }
    </div>
  );
};

module.exports = Type;

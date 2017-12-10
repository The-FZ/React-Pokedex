var React = require('react');

var Name=({name})=>{
  return (
    <div className='name'>
      {name[0].toUpperCase()+name.slice(1)}
    </div>
  );
};

module.exports=Name;

var React = require('react');
var Options = require('Options');


var Filter = ({handleChange}) =>{
  return (
    <div className='filter'>
      <div className='filter-heading'>Filter the pokemon by their types</div>
      <Options handleChange={handleChange}/>
    </div>
  );
};

module.exports = Filter;

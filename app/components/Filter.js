var React = require('react');
var Options = require('Options');
var Search = require('Search');


var Filter = ({handleChange,handleOnSubmit}) =>{
  return (
    <div className='filter'>
      <div className='filter-heading'>Filter the pokemon by their types</div>
      <Options handleChange={handleChange}/>
      <Search handleOnSubmit = {handleOnSubmit}/>
    </div>
  );
};

module.exports = Filter;

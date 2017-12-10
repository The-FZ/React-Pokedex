var React = require('react');

var Previous =({onClickPrevious})=>{
  return (
    <div>
      <button onClick={onClickPrevious}>Previous</button>
    </div>
  );
};

module.exports = Previous;

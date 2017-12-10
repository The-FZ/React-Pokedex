var React = require('react');

var Previous =({onClickPrevious})=>{

  return (
    <div className="previous">
      <button id='previousButton' onClick={onClickPrevious}> <i className="fa fa-arrow-left"/> Previous</button>
    </div>
  );
};

module.exports = Previous;

var React = require('react');

var Next =({onClickNext})=>{

  return (
    <div className="next">
      <button id="nextButton" onClick={onClickNext}>Next <i className="fa fa-arrow-right"/> </button>
    </div>
  );
};

module.exports = Next;

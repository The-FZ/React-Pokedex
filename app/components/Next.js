var React = require('react');

var Next =({onClickNext})=>{
  return (
    <div>
      <button onClick={onClickNext}>Next</button>
    </div>
  );
};

module.exports = Next;

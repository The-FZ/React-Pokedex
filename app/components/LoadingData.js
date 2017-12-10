var React = require('react');
var Timer = require('Timer');


var LoadingData = ({time})=>{
  return (
    <div className="loadingData">
      <p>Take a chill pill.
        The data is being loaded.</p>

    <Timer time = {time}/>
    </div>
  )
};

module.exports = LoadingData;

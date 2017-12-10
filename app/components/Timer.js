var React = require('react');

var Timer = ({time}) =>{
  var renderTime=()=>{
    var remainingTime = 20-time;
    return remainingTime;
  };
  return (
    <div className='timer'>
      <i className="fa fa-clock-o"/>   {renderTime()}  sec.
    </div>
  );
};

module.exports = Timer;

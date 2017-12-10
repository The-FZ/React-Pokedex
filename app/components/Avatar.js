var React = require('react');

var Avatar =({imgURL,name})=>{

   return (
        <div className='avatar'>
          <img src={imgURL} alt={name}/>
        </div>
    );
};

module.exports = Avatar;

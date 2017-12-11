var React = require('react');
var createReactClass = require('create-react-class');


var Search = createReactClass({

  handleSubmit:function(event){
    event.preventDefault();
    var pokemon = this.refs.pokeSearch.value;
    if(pokemon.length>0){
      this.refs.pokeSearch.value='';
      this.props.handleOnSubmit(pokemon);
    }
  },

  render:function(){
    return (
      <div className='searchbar'>
      <form onSubmit={this.handleSubmit}>
        <input type='text' placeholder='Search your favourite pokemon ...' ref='pokeSearch'/>
      </form>
      </div>
    );
  }

});

module.exports = Search;

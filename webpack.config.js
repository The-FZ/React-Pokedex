const path = require('path');
var webpack = require('webpack');

module.exports = {
  entry:[
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.js'],
  externals:{
    jquery:'jQuery',
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output:{
    path:__dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    alias:{
      PokemonMain:path.resolve(__dirname,'./app/components/PokemonMain.js'),
      PokemonList:path.resolve(__dirname,'./app/components/PokemonList.js'),
      PokemonListItem:path.resolve(__dirname,'./app/components/PokemonListItem.js'),
      Navbar:path.resolve(__dirname,'./app/components/Navbar.js'),
      Name:path.resolve(__dirname,'./app/components/Name.js'),
      Avatar:path.resolve(__dirname,'./app/components/Avatar.js'),
      Stats:path.resolve(__dirname,'./app/components/Stats.js'),
      Weight:path.resolve(__dirname,'./app/components/Weight.js'),
      Height:path.resolve(__dirname,'./app/components/Height.js'),
      Type:path.resolve(__dirname,'./app/components/Type.js'),
      Abilities:path.resolve(__dirname,'./app/components/Abilities.js'),
      Next:path.resolve(__dirname,'./app/components/Next.js'),
      Previous:path.resolve(__dirname,'./app/components/Previous.js'),
      PokemonAPI:path.resolve(__dirname,'./app/api/PokemonAPI.js'),
      applicationStyles:path.resolve(__dirname,'./app/styles/app.scss')
    },
    extensions:[' ', '.js', '.jsx', '.css', '.scss']
  },
  module:{
    loaders:[
      {
        loader:'babel-loader',
        query:{
          presets:['es2015', 'react', 'stage-0']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]

  }
};

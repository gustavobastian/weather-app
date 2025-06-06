const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode:'development', 
  entry: {
    index:{
      import:'./src/index.js', 
      //dependOn:'weatherService',                 
      },  
    weatherService:{
        import:'./src/weatherService.js',                                          
        dependOn:'env',                 
        },    
    env:{
         import:'./src/env.js',                    
        },        
    cityForm:{
        import:'./src/cityForm.js',                
        dependOn:'weatherService',                     
    },                   
    header:{
        import:'./src/header.js',                    
       },         
    currentWeather:{
        import:'./src/currentWeather.js',                    
       },            
    imgService:{
        import:'./src/imgService.js',                    
       },               
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Weather App',
      template: "index.html",

    }),
  ],
  output: {
    //filename: 'main.js',
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      
    ],
  },
};
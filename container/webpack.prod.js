const CleanWebpackPlugin = require('clean-webpack-plugin').CleanWebpackPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      //   {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: 'babel-loader',
      //       options: {
      //         presets: ['@babel/preset-react', '@babel/preset-env']
      //       }
      //     }
      //   },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'container',

      remotes: {
        products: 'products@http://localhost:4000/remoteEntry.js',
        cart: 'cart@http://localhost:4003/remoteEntry.js'
      }
    })
  ]
};

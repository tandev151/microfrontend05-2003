const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: 4001
  },
  plugins: [
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

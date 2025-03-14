const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  mode: 'development',
  devServer: {
    port: '4000'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),

    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap.js'
      },

      // shared: ['@faker-js/faker']
      shared: {
        '@faker-js/faker': {
          singleton: true,
          requiredVersion: '^9.6.0'
        }
      }
    })
  ]
};

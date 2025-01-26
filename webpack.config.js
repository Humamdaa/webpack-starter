const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: 'assets/[name].[ext]',
  },
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    // TODO: false
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      /* Images Loader */
      {
          test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
          type: 'asset/resource',
      },
      /* Style Sheet Loader*/
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      /* NodeJS Loader*/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      /* File Loader */
      {
        test: /\.glb$/,
        use:
        [
            {
                loader: 'file-loader',
                options:
                {
                    outputPath: 'assets/resource/'
                }
            }
        ]
    },
    
    ],
  },
  resolve: {
    extensions: [".js", ".scss"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack-Template-App',
      favicon: './src/assets/favicon.ico',
      filename: 'index.html',
      template: 'public/template.html',
    })
  ],
};

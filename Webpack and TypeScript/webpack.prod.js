const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //   mode: 'development', 'production', 'none'.
  mode: 'development',
    // Entry Point
  entry: './src/index.ts',
  // For adding source maps.
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        // Test ".ts" or ".tsx" files. "?" for optional.
        test: /\.tsx?$/,
        // "use "ts-loader" package that we installed.
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    // The reason developers use [contenthash] is that it helps browser recognize that things have changed. It's not gonna run into problem with caching, It's a common solution. And everytime we run "npm run build" command, it generates totally a new bundled "js" file in dist folder.
    // filename: '[contenthash].bundle.js',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist",
  },
//   clean-webpack-plugin will empty out hash javascript files created in dist folder because of "[contenthash].bundle.js". We will only have our most recent bundled hashed javascript file in the dist folder.
  plugins: [new CleanWebpackPlugin()]
};

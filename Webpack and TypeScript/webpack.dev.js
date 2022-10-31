const path = require('path');

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
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist",
  },
};

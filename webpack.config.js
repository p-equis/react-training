const path = require("path");

module.exports = {
  entry: {
    app: ["./src/app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      } 
    ]
  },
};

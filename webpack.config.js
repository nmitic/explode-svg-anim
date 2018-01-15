const PATH = require("path");

module.exports = {
    entry: "./src/explode.js",
    output: {
        path: PATH.join(__dirname, "dist"),
        filename: "explode-bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['env']
              }
            }
          },
          {
            test: /\.scss$/,
            use: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ]
          }
        ]
    }
}
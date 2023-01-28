const path = require("path");
const glob = require("glob");

const entryMap = {};

const files = glob("**/*.script.ts?(x)", { sync: true });

files.forEach((file) => {
  const name = file.split("/").pop().split(/\.ts*/)[0];

  entryMap[name] = `./${file}`;
});

console.log("Scripts to build:");

Object.keys(entryMap).forEach((scriptName) => {
  console.log(scriptName);
});

module.exports = {
  entry: entryMap,
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: __dirname + "/build",
  },
};

const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

let htmlFiles = [];
let directories = ["src"];
while (directories.length > 0) {
  let directory = directories.pop();
  let dirContents = fs
    .readdirSync(directory)
    .map((file) => path.join(directory, file));

  htmlFiles.push(...dirContents.filter((file) => file.endsWith(".html")));
  directories.push(
    ...dirContents.filter((file) => fs.statSync(file).isDirectory())
  );
}

module.exports = {
  mode: "production",
  entry: "./src/assets/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.html$/i,
        use: "html-loader",
      },
      {
        test: /\.(png|jpg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name]-[hash][ext]",
        },
      },
    ],
  },
  plugins: [
    // Build a new plugin instance for each .html file found
    ...htmlFiles.map(
      (htmlFile) =>
        new HtmlWebpackPlugin({
          template: htmlFile,
          filename: htmlFile.replace(path.normalize("src/"), ""),
          inject: true,
        })
    ),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new FaviconsWebpackPlugin("src/assets/favicon_io/favicon-32x32.png"),
  ],
};

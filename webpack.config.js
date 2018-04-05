const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
  entry: {
    main: "./src/index.js"
  },
  mode: "production",
  output: {
    path: path.resolve(process.cwd(), "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".scss", ".html"],
    modules: [
      path.resolve(__dirname, "node_modules"),
      path.resolve(process.cwd(), "node_modules")
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false
    })
  ]
};

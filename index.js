const webpack = require("webpack");

function compile() {
  return new Promise((resolve, reject) => {
    const config = require("./webpack.config.js");

    const compiler = webpack(config);

    compiler.run((err, stats) => {
      if (err) {
        reject(err);
        return;
      }

      process.stdout.write(
        stats.toString({ colors: true, errors: false }) + "\n"
      );

      if (stats.compilation.errors.length > 0) {
        reject(
          new Error(
            "Exiting due to compilation errors:\n\n" +
              stats.compilation.errors.join("\n")
          )
        );
        return;
      }

      resolve();
    });
  });
}
compile();

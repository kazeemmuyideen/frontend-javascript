// webpack.config.mjs
import path from "node:path";

/** @type {import('webpack').Configuration} */
export default {
  entry: "./js/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(".", "dist"),
  },
  resolve: { extensions: [".ts", ".js"] },
  module: { rules: [{ test: /\.ts$/, loader: "ts-loader" }] },
  mode: "development",
};

